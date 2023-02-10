import Image from "next/image"
import Link from "next/link"
import { CastMember } from "../lib/readGroupJson"
import logoImg from "../public/images/logo.png"
import Drawer from "./Drawer"

export default function NavLink ({cast} : {cast: CastMember[]}) {
    return (
        <nav className="container">
          <ul>
            <li><Drawer></Drawer></li>
          </ul>
          <ul>
            <Link href={'/'}>
              <Image src={logoImg} alt="logo" style={{height: "40px", width: "auto"}}/>
            </Link>
          </ul>
          <ul>
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