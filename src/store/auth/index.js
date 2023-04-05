// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    name: '',
    authToken: '',
    refreshToken: '',
  },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
})

export default authSlice.reducer
