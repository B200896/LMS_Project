export const handleAsyncThunk = (builder, asyncThunk, key) => {
    builder
      .addCase(asyncThunk.pending, (state) => {
        state[key].status = 'loading';
        state[key].error = null;
      })
      .addCase(asyncThunk.fulfilled, (state, action) => {
        state[key].status = 'succeeded';
        state[key].data = action.payload;
      })
      .addCase(asyncThunk.rejected, (state, action) => {
        state[key].status = 'failed';
        state[key].error = action.payload || action.error.message;
      });
  };
  