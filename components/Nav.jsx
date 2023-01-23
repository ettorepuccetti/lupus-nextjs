export default function Nav ({cast, onChoice}) {
    return (
        <nav className="container">
          <ul>
              <img src="images/logo.png" alt="logo" style={{height: "40px"}}/>
          </ul>
          <ul>
            <li>
              <details role="list" dir="rtl">
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