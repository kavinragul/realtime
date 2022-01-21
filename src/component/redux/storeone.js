import { createStore } from 'redux'
import { countReducer } from './counterreducer'

export const store= createStore(countReducer)

