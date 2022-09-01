import yaml from 'yaml'
import { fileURLToPath } from 'url'
import { join, dirname, extname } from 'path'
import { readFile, readdir } from 'fs/promises'


export async function getLocalBlogs() {
  const files = await readdir(join(dirname(fileURLToPath(import.meta.url)), 'list'))

  return await Promise.all(files
    .filter(file => extname(file) === '.yml')
    .map(async file => {
      const content = await readFile(join(dirname(fileURLToPath(import.meta.url)), 'list', file), 'utf8')

      return yaml.parse(content)
    })
  )
}
