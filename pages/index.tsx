import Head from 'next/head'
import fsPromises from 'fs/promises'
import path from 'path'
import { Key } from 'react'
import App from '../components/App'


type Member = {
  id: Key,
  name: string,
  slug: string,
  bio: string
}

export default function Home(props: any) {
  return (
    <>
      <App cast={props.members}/>
    </>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public/","group.json");
  const jsonData = await fsPromises.readFile(filePath, "utf-8");
  const objectData = JSON.parse(jsonData);

  return {
    props: {
      members: objectData
    }
  }
}
