import { createSlice } from '@reduxjs/toolkit'

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    isLoggedIn: false,
    isFetching: false,
    username: '',
    token: '',
  },
  reducers: {
    setIsLoggedIn: (state, action) => {
      const { isLoggedIn } = action.payload
      state.isLoggedIn = isLoggedIn
    },
    setIsFetching: (state, action) => {
      const { isFetching } = action.payload
      state.username = isFetching
    },
    setToken: (state, action) => {
      const {token} = action.payload
      state.token = token
    },
    setUsername: (state, action) => {
      const { username } = action.payload
      state.username = username
    },

  },
})

const { actions, reducer } = accountSlice
export const { setIsLoggedIn, setIsFetching, setUsername, setToken } = actions
export default reducer

// Views
export const isLoggedInVew = state => state.account.isLoggedIn
export const isFetchingView = state => state.account.isFetching
export const usernameView = state => state.account.username
export const token = state => state.account.token

// // Getters
// export const getIsLoggedIn = state => (state ?? getState()).isLoggedIn
//
// // Dispatches
// export const dispatchIsLoggedIn = isLoggedIn =>
//   dispatch(setIsLoggedIn({ isLoggedIn }))
//
// export const dispatchUsername = username =>
//   dispatch(setUsername({ username }))
