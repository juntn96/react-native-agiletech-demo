import { createStore, combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

const reducers = {
  form
}
const reducer = combineReducers(reducers)
export const store = createStore(reducer)