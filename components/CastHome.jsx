import React, { useState } from 'react';
import ListCast from './ListCast';
import DarkSwitch from './DarkSwitch';
import Modal from './Modal';
import GameDescriptionAccordion from './GameDescriptionAccordion';
import Image from 'next/image';
import groupImg from "../public/images/group.png"
import NavLink from './NavLink';

function CastHome({cast}) {
  const [memberInfo, setMemberInfo] = useState(null)

  return (
    <>
      <NavLink cast={cast}/>
      <div className="container">
        <hgroup>
          <Image src={groupImg} alt="Lupus Group" className="container" placeholder="blur"/>
          <h1>Lupus in <i>Tabula</i></h1>
          <GameDescriptionAccordion />
          <h2>Personaggi</h2>
          <p>clicca su un personaggio per aprire la descrizione</p>
          <ListCast cast={cast} onChoice={(info) => setMemberInfo(info)}/>
          {
            memberInfo && <Modal 
              member={memberInfo} 
              handleClose={() => setMemberInfo(null)}
              handlePrev={() => setMemberInfo(cast[(cast.indexOf(memberInfo) + cast.length - 1) % cast.length])}
              handleNext={() => setMemberInfo(cast[(cast.indexOf(memberInfo) + 1) % cast.length])}
            />
          }
          <footer>
            <hr />
            <p> <small> Made with ❤️ by EP </small></p>
          </footer>
        </hgroup>
      </div>
      <DarkSwitch />
    </>
  )
}
export default CastHome

