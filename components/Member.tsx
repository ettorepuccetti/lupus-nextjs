import Image from "next/image"
import Link from "next/link"
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { CastMember } from "../lib/readGroupJson"

export default function Member ( {member, nextMember, prevMember}: {member: CastMember, nextMember: string, prevMember: string} ) {
  
  return (
    <>
      <hgroup className="container">
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>{member.name}</h2>
          <Image
            priority={true}
            width={200}
            height={200}
            style={{
              maxHeight: "200px",
              padding: "10px",
              marginBottom: "var(--typography-spacing-vertical)"
            }}
            src={`/images/${member.slug}.png`}
            alt={member.name} />
        </div>
        <p>{member.bio}</p>
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
          <Link href={`${prevMember}`}  className="secondary outline"> <ArrowBackIosRoundedIcon fontSize="large"/> </Link>
          <Link href="/"  className="secondary outline"> <HomeIcon fontSize="large"/> </Link>
          <Link href={`${nextMember}`} className="secondary outline"> <ArrowForwardIosRoundedIcon fontSize="large"/> </Link>
        </div>
      </hgroup>      
    </>
  )
}