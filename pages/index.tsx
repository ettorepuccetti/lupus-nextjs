import Head from 'next/head'
import App from '../components/App'
import { readGroupJson } from '../lib/readGroupJson'


export default function Home(props: any) {
  return (
    <>
      <Head>
        <title>Lupus in Tabula</title>
      </Head>
      <App cast={props.members}/>
    </>
  )
}

export async function getStaticProps() {
  const objectData = await readGroupJson()

  return {
    props: {
      members: objectData
    }
  }
}
