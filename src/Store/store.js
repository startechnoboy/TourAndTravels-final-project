import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './AuthSlice'
import cartReducer from './cartSlice'

export default configureStore({
  reducer: {
    auth: AuthReducer,
    cart: cartReducer
  }
})