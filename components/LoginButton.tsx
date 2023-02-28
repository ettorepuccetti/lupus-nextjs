import { Dispatch, SetStateAction, useState } from 'react';
import { loginWithRedirect, logout } from 'thin-backend';
import { useIsLoggedIn } from 'thin-backend-react';

function LoginButton() {
  const [isLoading, setLoading]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
  const isLoggedIn: boolean | null = useIsLoggedIn();

  async function doLogin() {
    setLoading(true);
    await loginWithRedirect();
    setLoading(false);
  }



  async function doLogout() {
    const env = process.env.NODE_ENV;
    const redirect = env === 'development' ? 'http://localhost:3000' : 'https://lupusintabula.com';
    setLoading(true);
    await logout({ redirect: redirect });
    setLoading(false);
  }

  if (isLoggedIn === null) {
    return <button disabled>Loading...</button>
  } else if (!isLoggedIn) {
    return <button onClick={doLogin} disabled={isLoading}>Login</button>
  } else {
    return <button onClick={doLogout} disabled={isLoading}>Logout</button>
  }
}

export { LoginButton }