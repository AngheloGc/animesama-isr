import { FetchApiParams } from './interfaces'

const API_URL = 'http://animesama.info/graphql'

export const fetchAPI = async <ResponseProps>({ query, options }: FetchApiParams): Promise<ResponseProps> => {
  const headers = { 'Content-Type': 'application/json' }
  const variables = options?.variables ?? {}

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
  })

  const json = await res.json()
  return json.data
}