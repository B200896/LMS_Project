import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './apiSlice'; // adjust path if needed

export const store = configureStore({
  reducer: {
    api: apiReducer,
    // you can add more slices like authSlice, cartSlice, etc.
  },
});
