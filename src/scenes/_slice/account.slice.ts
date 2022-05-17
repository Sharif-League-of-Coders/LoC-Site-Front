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
    setUsername: (state, action) => {
      const { username } = action.payload
      state.username = username
    },

  },
})

const { actions, reducer } = accountSlice
export const { setIsLoggedIn, setIsFetching, setUsername } = actions
export default reducer

// Views
export const isLoggedInVew = state => state.isLoggedIn
export const isFetchingView = state => state.isFetching
export const usernameView = state => state.username

// // Getters
// export const getIsLoggedIn = state => (state ?? getState()).isLoggedIn
//
// // Dispatches
// export const dispatchIsLoggedIn = isLoggedIn =>
//   dispatch(setIsLoggedIn({ isLoggedIn }))
//
// export const dispatchUsername = username =>
//   dispatch(setUsername({ username }))
