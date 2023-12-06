import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  post: {},
  isFetched: false,
};

export const fetchPosts = createAsyncThunk('posts/fetchposts', async () => {
  const response = await fetch('http://localhost:3000/api/v1/posts');
  const result = response.json();
  return result;
});

export const fetchPostsDetails = createAsyncThunk(
  'postsdetails/fetchpostsdetails',
  async (id) => {
    const response = await fetch(`http://localhost:3000/api/v1/posts/${id}`);
    const result = await response.json();
    return result;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isFetched = true;
    });
    builder.addCase(fetchPostsDetails.fulfilled, (state, action) => {
      state.post = action.payload;
    });
  },
});

export default postsSlice.reducer;
