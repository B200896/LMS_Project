import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunkPrivate } from '../redux/apiThunk';
import { handleAsyncThunk } from '../redux/handleAsynThunk';

// Create your thunk
export const fetchUser = createAsyncThunkPrivate('api/fetchUser', async (api, args, thunkAPI) => {
  return await api.get('/user/profile');
});

const initialState = {
  user: {
    data: null,
    status: 'idle',
    error: null,
  },
};

// Create slice
const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    handleAsyncThunk(builder, fetchUser, 'user'); 
  },
});

export default apiSlice.reducer;
