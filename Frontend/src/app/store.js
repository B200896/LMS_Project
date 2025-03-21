import { configureStore } from "@reduxjs/toolkit"; 
import authReducer from '../features/authSlice'
import rootReducer from "./rootReduce";
import { authApi } from "../features/api/authApi"
export const store=configureStore({
    reducer:rootReducer,
    middleware:(defaultMiddleware)=>defaultMiddleware().concat(authApi.middleware)
})