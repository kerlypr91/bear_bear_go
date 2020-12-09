import searchReducer, { initialState } from './searchReducer'
import { actionTypes } from './actions'

describe('Search Reducer Tests', () => {
  it('should return the initial state, if action is not mapped', () => {
    expect(searchReducer(undefined, { x: 'anyValue' })).toEqual(initialState)
  })

  it('should handle updateSearchValue action', () => {
    const action = {
      type: actionTypes.updateSearchValue,
      payload: 'newTest'
    }

    expect(searchReducer(initialState, action)).toEqual({
      ...initialState,
      value: 'newTest'
    })
  })

  it('should handle updateSearchEngine action', () => {
    const action = {
      type: actionTypes.updateSearchEngine,
      payload: 'google'
    }

    expect(searchReducer(initialState, action)).toEqual({
      ...initialState,
      engine: 'google'
    })
  })

  it('should handle searchStart action', () => {
    const action = {
      type: actionTypes.searchStart
    }

    expect(searchReducer(initialState, action)).toEqual({
      ...initialState,
      fetching: true,
      results: []
    })
  })

  it('should handle searchComplete action', () => {
    const action = {
      type: actionTypes.searchComplete,
      payload: ['a', 'b']
    }

    expect(searchReducer(initialState, action)).toEqual({
      ...initialState,
      fetching: false,
      results: ['a', 'b']
    })
  })
})
