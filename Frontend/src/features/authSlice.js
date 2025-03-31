// features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userData = JSON.parse(sessionStorage.getItem("userData"));

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: !!userData,
    user: userData?.user || null,
    token: userData?.token || null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.isAuthenticated = true;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      sessionStorage.removeItem("userData");
    }
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
