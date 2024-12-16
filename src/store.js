import { configureStore } from "@reduxjs/toolkit";
import cartReducer from'./features/cart/cartSlice';
import userReducer from './features/User/UserSlice'


export const store = configureStore({
    reducer:{
        cartState:cartReducer,
        userState:userReducer,
    }
})

