import type { AppProps } from 'next/app'
import { initThinBackend } from 'thin-backend';
import { ThinBackend } from 'thin-backend-react';
import 'thin-backend-react/auth.css';
import '@picocss/pico';

initThinBackend({ host: process.env.NEXT_PUBLIC_BACKEND_URL });

function App({ Component, pageProps }: AppProps) {
  return (
    <ThinBackend>
      <Component {...pageProps} />
    </ThinBackend>
  )
}

export default App