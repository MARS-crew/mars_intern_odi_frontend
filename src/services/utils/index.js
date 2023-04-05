// ** Redux Imports
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// ** Other Imports
import { Mutex } from 'async-mutex'

const baseUrl = '/api'

const baseQuery = fetchBaseQuery({
  prepareHeaders: (headers, { getState }) => {
    return headers
  },
  baseUrl,
})

const mutex = new Mutex()
export const customFetchBase = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)
  if (result.error?.status === 403) {
  }

  return result
}
