import { readdirSync, statSync, copyFileSync } from 'fs'
/*
summary
input: path to copy, final path
copy all file from "path to copy in final path"
*/

export async function envBackup(pathToCopy: string, finalPath: string): Promise<void>
{
  const list: string[] = []
  listFolder(list, "", pathToCopy)
  list.forEach(file => {
    copyFileSync(pathToCopy + file, finalPath + file)
  })
}

/*
summary
example of how it work

root = C:/root/
relativePath = folder/

so file path will be = root + relativePath = C:/root/folder/
and file path will be = root + relativePath + fileName = C:/root/folder/ + file1.txt

so I will save in my list = relativePath + fileName = folder/file1.txt
*/

async function listFolder(list:string[], relativePath: string, root:string): Promise<void>
{
  const rootStat = statSync(root + relativePath)
  if (rootStat.isDirectory())
  {
    const dirFiles = readdirSync(root + relativePath, { encoding: 'utf8' })
    for (const file of dirFiles)
    {
      const filePath = relativePath + file
      const fileStat = statSync(root + file)
      if (fileStat.isDirectory())
      {
        listFolder(list, relativePath + filePath + "/", root)
      }
      else if (fileStat.isFile())
      {
        //put file in list
        list.push(filePath)
      }
      else
      {
        throw new Error(root + relativePath + filePath + '-> file not found')
      }
    }
  }
  else {
    throw new Error(root + relativePath + "-> is not a folder")
  }
}