import Image from "next/image"
import { useRouter } from "next/router";
import fsPromises from 'fs/promises'
import path from 'path'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import Link from "next/link";


type CastMember = {
  id: number,
  name: string,
  slug: string,
  bio: string
}

export default function MemberArticle ( {member}: any) {
  return (
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
        <Link role="button" href="/" className="outline"> Back </Link>
      </div>
    </article>
  )
}



export async function getStaticPaths() {

  const filePath = path.join(process.cwd(), "public/","group.json");
  const jsonData = await fsPromises.readFile(filePath, "utf-8");
  const objectData: CastMember[] = JSON.parse(jsonData);

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
  const filePath = path.join(process.cwd(), "public/","group.json");
  const jsonData = await fsPromises.readFile(filePath, "utf-8");
  const objectData : CastMember[] = JSON.parse(jsonData);
  const member = objectData.find((member: CastMember) => member.name === params.member)
  return {
    props: {
      member: member
    }
  }
}