import fsPromises from 'fs/promises';
import path from 'path';

export type CastMember = {
  id: number,
  name: string,
  slug: string,
  bio: string
}

export async function readGroupJson() {
  const filePath = path.join(process.cwd(), "public/", "group.json");
  const jsonData = await fsPromises.readFile(filePath, "utf-8");
  const objectData : CastMember[] = JSON.parse(jsonData);
  return objectData;
}
