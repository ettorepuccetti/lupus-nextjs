import fsPromises from 'fs/promises';
import path from 'path';

export type CastMember = {
  id: number,
  name: string,
  slug: string,
  bio: string
}

export function readGroupJson() : Promise<CastMember[]> {
  const filePath = path.join(process.cwd(), "public/", "group.json");

  const dataPromise: Promise<CastMember []> = fsPromises.readFile(filePath, "utf-8")
    .then( (data: string) => { return JSON.parse(data); })
    .then( (data : CastMember[]) => {return data; })

  return dataPromise;
}
