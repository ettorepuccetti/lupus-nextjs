import Image from "next/image"
import { CastMember } from "../lib/readGroupJson"
import logoImg from "../public/images/logo.png"

export default function Nav ({cast, onChoice} : {cast: CastMember[], onChoice: (member: CastMember) => void}) {
    return (
        <nav className="container">
          <ul>
              <Image src={logoImg} alt="logo" style={{height: "40px", width: "auto"}}/>
          </ul>
          <ul>
            <li>
              <details role="list" dir="rtl">
                {/*eslint-disable-next-line jsx-a11y/role-supports-aria-props*/}
                <summary aria-haspopup="listbox" role="link">Personaggi</summary>
                <ul role="listbox">
                  {cast.map((member) => (
                    <li key={member.id}>
                      <a  onClick={() => onChoice(member)}>{member.name}</a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </nav>
    )
}