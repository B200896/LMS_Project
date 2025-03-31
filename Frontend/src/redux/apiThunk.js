import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://localhost:8080'; // use http locally!

// Public API instance
const apiThunkPublic = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Private API instance with Token
const apiThunkPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Intercept token
apiThunkPrivate.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/**
 * createAsyncThunk for Public APIs
 */
export const createAsyncThunkPublic = (type, apiFn) =>
  createAsyncThunk(type, async (args, thunkAPI) => {
    try {
      const response = await apiFn(apiThunkPublic, args, thunkAPI);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  });

/**
 * createAsyncThunk for Private APIs
 */
export const createAsyncThunkPrivate = (type, apiFn) =>
  createAsyncThunk(type, async (args, thunkAPI) => {
    try {
      const response = await apiFn(apiThunkPrivate, args, thunkAPI);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  });

export { apiThunkPublic, apiThunkPrivate };
