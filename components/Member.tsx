import Image from "next/image"
import Link from "next/link"
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { CastMember } from "../lib/readGroupJson"

export default function Member ( {member, nextMember}: {member: CastMember, nextMember: string} ) {
  
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
      </hgroup>
      <div style={{display: "flex", justifyContent: "space-evenly"}}>
        <Link role="button" href="/" className="secondary"> <HomeIcon/> </Link>
        <Link role="button" href={`${nextMember}`} as={`${nextMember}`} className="secondary"> <ArrowForwardIosRoundedIcon/> </Link>
      </div>
    </>
  )
}