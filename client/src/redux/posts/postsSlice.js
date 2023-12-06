import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  post: {},
  isFetched: false,
};

export const fetchPosts = createAsyncThunk('posts/fetchposts', async () => {
  const response = await fetch('http://localhost:3000/api/v1/posts');
  const result = await response.json();
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

export const createPost = createAsyncThunk(
  'post/createpost',
  async (postData) => {
    const response = await fetch('http://localhost:3000/api/v1/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    const data = await response.json()
    return data
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
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.posts.push(action.payload); 
    })
  },
});

export default postsSlice.reducer;
