import { combineReducers } from '@reduxjs/toolkit'

import loginSlice from '../../scenes/_slice/login.slice'

const rootReducer = combineReducers({
 login: loginSlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
