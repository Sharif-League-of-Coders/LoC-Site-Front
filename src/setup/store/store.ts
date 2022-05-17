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
      account: state.account,
    }),
  )
})
export default store
