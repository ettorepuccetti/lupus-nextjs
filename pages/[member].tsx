import Image from "next/image"
import Link from "next/link";
import Head from "next/head";
import { CastMember, readGroupJson } from "../lib/readGroupJson"


export default function MemberArticle ( {member}: {member: CastMember}) {
  return (
    <>
      <Head>
        <title>Lupus in Tabula - {member.name}</title>
      </Head>
      <article>
        <hgroup>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
            <h2 style={{ marginBottom: "20px" }}>{member.name}</h2>
            <Image
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
        <div style={{display: "flex", justifyContent: "center"}}>
          <Link role="button" href="/" className="outline"> ← Back </Link>
        </div>
      </article>
    </>
  )
}



export async function getStaticPaths() {
  const objectData: CastMember[] = await readGroupJson();
  return {
    paths: 
      objectData.map( member => {
        return {
          params: {
            member: member.name,
          },
        }
      }),
    fallback: false
  };
}

export async function getStaticProps ( {params}: any) {
  const objectData: CastMember[] = await readGroupJson();
  const member : CastMember | undefined = objectData.find((member: CastMember) => member.name === params.member)
  return {
    props: {
      member: member
    }
  }
}