// ** Redux Imports
import { configureStore, combineReducers } from '@reduxjs/toolkit'

// ** Other Imports
import { middleware } from './middleware'
import auth from './auth'
import { api } from '../services'

const reducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth
})

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware)
})
