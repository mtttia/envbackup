import { readdirSync, statSync, copyFileSync, mkdirSync, existsSync } from 'fs'
/*
summary
input: path to copy, final path
copy all file from "path to copy in final path"
*/

export function envBackup(pathToCopy: string, finalPath: string) :void
{
  const fileList: string[] = []
  const folderList: string[] = []
  listFolder(folderList, fileList, "", pathToCopy)
  folderList.forEach(folder => {
      //if folder not exists make the folder
      const workPath = finalPath + folder
      if(!existsSync(workPath))
          mkdirSync(workPath)
  })
  fileList.forEach(file => {
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

function listFolder(listOfFolder:string[], listFile:string[], relativePath: string, root:string): void
{
  const rootStat = statSync(root + relativePath)
  if (rootStat.isDirectory())
  {
    const dirFiles = readdirSync(root + relativePath, { encoding: 'utf8' })
    for (const file of dirFiles)
    {
      const filePath = relativePath + file
      const fileStat = statSync(root + filePath)
      if (fileStat.isDirectory())
      {
          listOfFolder.push(filePath)
          listFolder(listOfFolder, listFile, relativePath + filePath + "/", root)
      }
      else if (fileStat.isFile())
      {
        //put file in list
        listFile.push(filePath)
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