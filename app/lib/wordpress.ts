import { FetchApiParams } from './interfaces'

const API_URL = 'http://animesama.info/graphql'

export const fetchAPI: FetchApiParams = async ( query, { variables } = {} ) => {
  const headers = { 'Content-Type': 'application/json' }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
  })

  const json = await res.json()
  return json.data
}