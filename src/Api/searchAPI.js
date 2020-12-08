import { create } from 'apisauce'

export function searchGoogleAPI (searchValue) {
  const api = create({
    baseURL: 'https://google-search3.p.rapidapi.com',
    headers: {
      'Content-Type': 'application/json',
      "x-rapidapi-key": "7d73690ac3msh28333c76924c559p146067jsne38b7d280458",
      "x-rapidapi-host": "google-search3.p.rapidapi.com"
    }
  })

  return api.get(`/api/v1/search/q=${encodeURI(searchValue)}&num=30`)
}

export function searchBingAPI (searchValue) {
  const api = create({
    baseURL: 'https://bing-web-search1.p.rapidapi.com',
    headers: {
      'Content-Type': 'application/json',
      "x-bingapis-sdk": "true",
      "x-rapidapi-key": "7d73690ac3msh28333c76924c559p146067jsne38b7d280458",
      "x-rapidapi-host": "bing-web-search1.p.rapidapi.com"
    }
  })

  return api.get(`/search?q=${encodeURI(searchValue)}&mkt=en-us&textFormat=Raw&safeSearch=Off&freshness=Day`)
}
