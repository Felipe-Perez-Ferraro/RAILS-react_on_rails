import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  isFetched: false,
};

export const fetchPosts = createAsyncThunk('posts/fetchposts', async () => {
  const response = await fetch('http://localhost:3000/api/v1/posts');
  const result = response.json();
  return result;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isFetched = true;
    });
  },
});

export default postsSlice.reducer;
