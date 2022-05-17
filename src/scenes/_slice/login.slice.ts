import { createSlice } from '@reduxjs/toolkit'
import store from '../../setup/store/store'

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    setIsLoggedIn: (state, action) => {
      const { isLoggedIn } = action.payload
      state.isLoggedIn = isLoggedIn
    },
  },
})

const { actions, reducer } = loginSlice
export const { setIsLoggedIn } = actions
export default reducer

// Views
export const isLoggedInVew = state => state.isLoggedIn

// Getters
export const getIsLoggedIn = state => (state ?? store.getState()).isLoggedIn

// Dispatches
export const dispatchIsLoggedIn = isLoggedIn =>
  store.dispatch(setIsLoggedIn({ isLoggedIn }))
