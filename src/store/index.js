// ** Redux Imports
import { configureStore, combineReducers } from '@reduxjs/toolkit'

// ** Other Imports
import { middleware } from './middleware'
import auth from './auth'

const reducer = combineReducers({
  auth,
})

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
      },
    }).concat(middleware),
})
