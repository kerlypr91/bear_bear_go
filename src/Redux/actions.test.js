// import 'JestMocks/ActionHelpers'
import actions, { actionTypes } from './actions'
import * as searchAPI from '../Api/searchAPI'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Actions Tests', () => {

  it('should create a updateSearchValue action', () => {
    const expectedAction = {
      type: actionTypes.updateSearchValue,
      payload: 'newValue'
    }

    expect(actions.updateSearchValue('newValue')).toEqual(expectedAction)
  })

  it('should create a updateSearchEngine action', () => {
    const expectedAction = {
      type: actionTypes.updateSearchEngine,
      payload: 'newValue'
    }

    expect(actions.updateSearchEngine('newValue')).toEqual(expectedAction)
  })

  it('searchGoogle action should dispatch api response with type SEARCH_COMPLETE', () => {
    searchAPI.searchGoogleAPI = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        data: {}
      })
    )

    const store = mockStore({})

    return store
      .dispatch(actions.searchGoogle('searchValue'))
      .then(() => {
        const returnedActions = store.getActions()

        expect(returnedActions[0].type).toEqual(actionTypes.searchStart)
        expect(returnedActions[1].type).toEqual(actionTypes.searchComplete)
      })
  })

  it('searchBing action should dispatch api response with type SEARCH_COMPLETE', () => {
    searchAPI.searchBingAPI = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        data: []
      })
    )

    const store = mockStore({})

    return store
      .dispatch(actions.searchBing('searchValue'))
      .then(() => {
        const returnedActions = store.getActions()

        expect(returnedActions[0].type).toEqual(actionTypes.searchStart)
        expect(returnedActions[1].type).toEqual(actionTypes.searchComplete)
      })
  })
})
