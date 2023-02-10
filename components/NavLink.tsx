import Image from "next/image"
import Link from "next/link"
import { CastMember } from "../lib/readGroupJson"
import logoImg from "../public/images/logo.png"
import Drawer from "./Drawer"

export default function NavLink ({cast} : {cast: CastMember[]}) {
    return (
        <nav className="container">
          <ul style={{ flex: 1, marginRight: 'auto'}}>
            <li>
              <Drawer cast={cast}/>
            </li>
          </ul>
          <ul>
            <Link href={'/'}>
              <Image src={logoImg} alt="logo" style={{height: "40px", width: "auto", flex: 1, display: 'flex', justifyContent: 'center'}}/>
            </Link>
          </ul>
          <ul style={{ flex: 1, display: 'flex', marginLeft: 'auto', justifyContent:"flex-end"}}>
            <li>
              <details role="list" dir="rtl">
                {/*eslint-disable-next-line jsx-a11y/role-supports-aria-props*/}
                <summary aria-haspopup="listbox" role="link">Personaggi</summary>
                <ul role="listbox">
                  {cast.map((member) => (
                    <li key={member.id}>
                      <Link href={member.name}>{member.name}</Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </nav>
    )
}