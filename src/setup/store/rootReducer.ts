import { combineReducers } from '@reduxjs/toolkit'
import accountSlice from '../../scenes/_slice/account.slice'


const rootReducer = combineReducers({
 account: accountSlice
})

export default rootReducer
