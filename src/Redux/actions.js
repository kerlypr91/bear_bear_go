import { searchGoogleAPI, searchBingAPI } from '../Api/searchAPI'

export const actionTypes = {
  updateSearchValue: 'UPDATE_SEARCH_VALUE',
  updateSearchEngine: 'UPDATE_SEARCH_ENGINE',
  searchStart: 'SEARCH_START',
  searchComplete: 'SEARCH_COMPLETE'
}

const updateSearchValue = (newValue) => {
  return {
    type: actionTypes.updateSearchValue,
    payload: newValue
  }
}

const updateSearchEngine = (newValue) => {
  return {
    type: actionTypes.updateSearchEngine,
    payload: newValue
  }
}

const searchStart = () => {
  return {
    type: actionTypes.searchStart,
    payload: true
  }
}

const searchGoogle = (searchValue) => {
  return (dispatch) => {
    dispatch(searchStart())

    if (!((searchValue || '').trim())) {
      return dispatch({
        type: actionTypes.searchComplete,
        payload: []
      })
    }

    return searchGoogleAPI(searchValue).then(response => {
      const { data } = response
      const results = data?.results || []

      return dispatch({
        type: actionTypes.searchComplete,
        payload: formatResults(results, 'google')
      })
    })
  }
}

const searchBing = (searchValue) => {
  return (dispatch) => {
    dispatch(searchStart())

    if (!((searchValue || '').trim())) {
      return dispatch({
        type: actionTypes.searchComplete,
        payload: []
      })
    }

    return searchBingAPI(searchValue).then(response => {
      const { data } = response
      const results = data?.webPages?.value || []

      return dispatch({
        type: actionTypes.searchComplete,
        payload: formatResults(results, 'bing')
      })
    })
  }
}

const searchAllEngines = (searchValue) => {
  return (dispatch) => {
    dispatch(searchStart())

    if (!((searchValue || '').trim())) {
      return dispatch({
        type: actionTypes.searchComplete,
        payload: []
      })
    }

    return Promise.all([
      searchGoogleAPI(searchValue),
      searchBingAPI(searchValue),

    ]).then((responses) => {
      const { data: googleData } = responses[0]
      const googleResults = googleData?.results || []

      const { data: bingData } = responses[1]
      const bingResults = bingData?.webPages?.value || []

      return dispatch({
        type: actionTypes.searchComplete,
        payload: [
          ...formatResults(googleResults, 'google'),
          ...formatResults(bingResults, 'bing')
        ]
      })
    })
  }
}

export default {
  updateSearchValue,
  updateSearchEngine,
  searchGoogle,
  searchBing,
  searchAllEngines
}

function formatResults (apiResults, typeOfSearch) {
  return apiResults.map((item) => {
    if (typeOfSearch === 'bing') {
      return {
        title: item.name,
        description: item.snippet,
        url: item.url
      }
    }

    return {
      title: item.title,
      description: item.description,
      url: item.link
    }
  })
}
