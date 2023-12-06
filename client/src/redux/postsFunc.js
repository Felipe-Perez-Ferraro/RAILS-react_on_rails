import { createAsyncThunk } from '@reduxjs/toolkit';

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
    const data = await response.json();
    return data;
  }
);

export const editPost = createAsyncThunk(
  'post/editpost',
  async ({ id, postData }) => {
    const response = await fetch(`http://localhost:3000/api/v1/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: postData }),
    });
    const data = await response.json();
    return data;
  }
);

export const deletePost = createAsyncThunk('post/deletepost', async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/v1/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      return { id };
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to delete post');
    }
  } catch (error) {
    throw new Error(error.message || 'Failed to delete post');
  }
});
