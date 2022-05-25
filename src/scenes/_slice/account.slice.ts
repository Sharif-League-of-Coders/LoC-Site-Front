import { createSlice } from '@reduxjs/toolkit'
import * as R from 'ramda'

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    isLoggedIn: false,
    isFetching: false,
    username: '',
    token: '',
    invitations: [],
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
      const { token } = action.payload
      state.token = token
    },
    setUsername: (state, action) => {
      const { username } = action.payload
      state.username = username
    },
    setInvitations: (state, action) => {
      const { data } = action.payload
      console.log(data)
      state.invitations = data
    },
    addInvitations: (state, action) => {
      const { data } = action.payload
      console.log(data, state.invitations)
      if (state.invitations)
        state.invitations = R.uniq([...state.invitations, ...data])
      else state.invitations = data
    },
  },
})

const { actions, reducer } = accountSlice
export const {
  setIsLoggedIn,
  setIsFetching,
  setUsername,
  setToken,
  setInvitations,
  addInvitations,
} = actions
export default reducer

// Views
export const isLoggedInVew = state => state.account.isLoggedIn
export const isFetchingView = state => state.account.isFetching
export const usernameView = state => state.account.username
export const tokenView = state => state.account.token
export const invitationsView = state => state.account.invitations

// // Getters
// export const getIsLoggedIn = state => (state ?? getState()).isLoggedIn
//
// // Dispatches
// export const dispatchIsLoggedIn = isLoggedIn =>
//   dispatch(setIsLoggedIn({ isLoggedIn }))
//
// export const dispatchUsername = username =>
//   dispatch(setUsername({ username }))
