import { useEffect, useState } from "react"
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

export default function DarkSwitch () {
  const buttonSize = "40px"
  const htmlElement = typeof window !== "undefined" ? document.getElementsByTagName("html")[0] : null ;
  const [dark, setDark] = useState(true);

  function switchMode() {
    setDark(!dark)
  }

  useEffect(() =>{
    htmlElement.setAttribute("data-theme", dark ? "dark" : "light")
  })

  return (
    <div
      className="contrast"
      role="button"
      aria-label="Turn on dark mode"
      onClick={switchMode}
      style={{
        position: "fixed",
        width: `${buttonSize}`,
        height: `${buttonSize}`,
        bottom: "5%",
        right: "5%",
        borderRadius: "50%",
        boxShadow: "2px 2px 3px #999",
        padding: 0
      }}
      >
        <div style={{display:"flex", alignItems: "center", justifyContent: "center", height:`${buttonSize}`}}>
          {dark ? <DarkModeIcon /> : <LightModeIcon/>}
        </div>
    </div>
  )
}