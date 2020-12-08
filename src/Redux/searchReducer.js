import { actionTypes } from './actions'

export const initialState = {
  value: '',
  engine: 'google',
  fetching: false,
  results: []
}

export default function (state = initialState, action) {
  const { payload, type } = action

  switch (type) {
    case actionTypes.updateSearchValue:
      return {
        ...state,
        value: payload
      }

    case actionTypes.updateSearchEngine:
      return {
        ...state,
        engine: payload
      }

    case actionTypes.searchStart:
      return {
        ...state,
        fetching: true,
        results: []
      }

    case actionTypes.searchComplete:
      return {
        ...state,
        fetching: false,
        results: payload
      }

    default:
      return state
  }
}
