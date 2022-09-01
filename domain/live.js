import fetch from 'node-fetch'
import createHttpError from 'http-errors'

// TODO: extract a separate package from this

const BASE_URL = 'https://porkbun.com/api/json/v3/dns/'
const DOMAIN = 'coding.blog'

const SUBDOMAIN_PATTERN = /^([a-z0-9-]+)\.coding\.blog$/


export async function getLiveBlogs() {
  const response = await fetch(`${BASE_URL}retrieve/${DOMAIN}`, {
    method: 'POST',
    body: JSON.stringify({
      apikey: process.env.API_KEY,
      secretapikey: process.env.API_SECRET,
    })
  })

  if (response.ok) {
    const data = await response.json()

    return data.records
      .filter(record =>
          record.type === 'CNAME' &&
          SUBDOMAIN_PATTERN.test(record.name) &&
          record.name.substring(0, 4) !== 'www.'
        )
      .map(record => ({
        name: record.name.split('.')[0],
        repo: record.content,
      }))
  } else {
    throw createHttpError(response.status, response.statusText)
  }
}


export async function addLiveBlog(name, repo) {
  const response = await fetch(`${BASE_URL}create/${DOMAIN}`, {
    method: 'POST',
    body: JSON.stringify({
      apikey: process.env.API_KEY,
      secretapikey: process.env.API_SECRET,
      type: 'CNAME',
      name,
      content: repo,
    })
  })

  if (!response.ok) {
    throw createHttpError(response.status, response.statusText)
  }
}


export async function updateLiveBlog(name, repo) {
  const response = await fetch(`${BASE_URL}editByNameType/${DOMAIN}/CNAME/${name}`, {
    method: 'POST',
    body: JSON.stringify({
      apikey: process.env.API_KEY,
      secretapikey: process.env.API_SECRET,
      content: repo,
    })
  })

  if (!response.ok) {
    throw createHttpError(response.status, response.statusText)
  }
}


export async function deleteLiveBlog(name) {
  const response = await fetch(`${BASE_URL}deleteByNameType/${DOMAIN}/CNAME/${name}`, {
    method: 'POST',
    body: JSON.stringify({
      apikey: process.env.API_KEY,
      secretapikey: process.env.API_SECRET,
    })
  })

  if (!response.ok) {
    throw createHttpError(response.status, response.statusText)
  }
}
