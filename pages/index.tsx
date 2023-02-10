import Head from 'next/head'
import CastHome from '../components/CastHome'
import { CastMember, readGroupJson } from '../lib/readGroupJson'


const Home = ({members}: {members: CastMember} ) => {
  return (
    <>
      <Head>
        <title>Lupus in Tabula</title>
      </Head>
      <CastHome cast={members}/>
    </>
  )
}

export default Home;

export async function getStaticProps() {
  const castMembersList: CastMember[] = await readGroupJson();
  return {
    props: {
      members: castMembersList
    }
  };
}
