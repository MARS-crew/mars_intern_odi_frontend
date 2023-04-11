// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '../../services'

const initialState = {
  user: {
    id: '',
    name: '',
    accessToken: '',
    refreshToken: ''
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.user = {
        id: payload.responseData.id,
        name: payload.responseData.name,
        accessToken: payload.responseData.authToken,
        refreshToken: payload.responseData.rfToken
      }
    })
  }
})

export default authSlice.reducer
