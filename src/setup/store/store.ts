import { configureStore } from '@reduxjs/toolkit'

import reducer from './rootReducer'

const persistedState = localStorage.getItem('LoC') //use local storage just to save token
  ? JSON.parse(localStorage.getItem('LoC'))
  : {}


const store = configureStore({
  reducer,
  preloadedState: { ...persistedState },
  devTools: process.env.NODE_ENV === 'development',
})

store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem(
    'LoC',
    JSON.stringify({
      login: state.login,
    }),
  )
})

export type RootState = ReturnType<typeof store.getState>


export const { dispatch, getState } = store
export default store
