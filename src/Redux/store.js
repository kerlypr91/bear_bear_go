import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createRootReducer from './reducers'

const store = createStore(
  createRootReducer(),
  compose(applyMiddleware(thunk))
)

export default store
