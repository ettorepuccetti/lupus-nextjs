import Head from "next/head";
import { CastMember, readGroupJson } from "../lib/readGroupJson"
import Member from "../components/Member"
import NavLink from "../components/NavLink";
import "@picocss/pico/css/pico.min.css";

export default function MemberArticle ( {member, cast}: {member: CastMember, cast: CastMember[]}) {
  
  const nextIndex: number = (cast.findIndex((element: CastMember) => element.name === member.name)+1) % cast.length;
  const nextMember: string = cast[nextIndex].name;

  return (
    <>
      <Head>
        <title>{`Lupus in Tabula - ${member.name}`}</title>
      </Head>
      <NavLink cast={cast}/>
      <Member member={member} nextMember={nextMember}/>
    </>
  )
}

let objectData: CastMember[];

async function getGroupJsonOnce(): Promise<CastMember[]> {
  if (!objectData) {
    objectData = await readGroupJson();
  }
  return objectData;
}

export async function getStaticPaths() {
  const objectData: CastMember[] = await getGroupJsonOnce();
  return {
    paths: 
      objectData.map( member => {
        return {
          params: {
            memberName: member.name,
          },
        }
      }),
    fallback: false
  };
}

export async function getStaticProps ( {params}: any) {
  const objectData: CastMember[] = await getGroupJsonOnce();
  const member : CastMember | undefined = objectData.find((member: CastMember) => member.name === params.memberName)
  return {
    props: {
      member: member,
      cast: objectData
    }
  }
}