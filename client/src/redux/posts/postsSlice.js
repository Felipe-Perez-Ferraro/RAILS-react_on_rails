import { createSlice } from '@reduxjs/toolkit';
import { createPost, deletePost, editPost, fetchPosts, fetchPostsDetails } from '../postsFunc';

const initialState = {
  posts: [],
  post: {},
  isFetched: false,
};

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
    });
    builder.addCase(editPost.fulfilled, (state, action) => {
      state.post = action.payload;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      const postId = action.payload.id;
      state.posts = state.posts.filter(post => post.id !== postId);
    });
  },
});

export default postsSlice.reducer;
