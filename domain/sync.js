import chalk from 'chalk'

import { getLiveBlogs, addLiveBlog, updateLiveBlog, deleteLiveBlog } from './live.js'
import { getLocalBlogs } from './local.js'


const ADD_COLOR = '#C3FF99'
const UPDATE_COLOR = '#F7A76C'
const DELETE_COLOR = '#EC7272'
const ERROR_COLOR = '#E94560'


export async function syncBlogs() {
  const [live, local] = await Promise.all([getLiveBlogs(), getLocalBlogs()])

  const additions = local.filter(blog => !live.some(liveBlog => liveBlog.name === blog.name))
  const updates = local.filter(
    blog => live.some(
      liveBlog => liveBlog.name === blog.name &&
      liveBlog.repo !== blog.repo
    )
  )
  const deletions = live.filter(liveBlog => !local.some(localBlog => localBlog.name === liveBlog.name))

  if (additions.length === 0 && updates.length === 0 && deletions.length === 0) {
    console.log(chalk.gray('🤷 No changes to sync.'))
    return
  }

  for (const blog of additions) {
    try {
      await addLiveBlog(blog.name, blog.repo)
      console.log(chalk.hex(ADD_COLOR)(`✨ Added ${blog.name}`))
    } catch (error) {
      console.log(chalk.hex(ERROR_COLOR)(`Adding ${blog.name} failed: ${error.message}`))
    }
  }

  for (const blog of updates) {
    try {
      await updateLiveBlog(blog.name, blog.repo)
      console.log(chalk.hex(UPDATE_COLOR)(`✏️ Updated ${blog.name}`))
    } catch (error) {
      console.log(chalk.hex(ERROR_COLOR)(`Updating ${blog.name} failed: ${error.message}`))
    }
  }

  for (const blog of deletions) {
    try {
      await deleteLiveBlog(blog.name)
      console.log(chalk.hex(DELETE_COLOR)(`🗑️ Deleted ${blog.name}`))
    } catch (error) {
      console.log(chalk.hex(ERROR_COLOR)(`Deleting ${blog.name} failed: ${error.message}`))
    }
  }
}


syncBlogs()
