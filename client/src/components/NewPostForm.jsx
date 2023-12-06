import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost, fetchPosts } from '../redux/postsFunc';
import { useNavigate } from 'react-router-dom';

function NewPostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createPost({ title, body }));
    await dispatch(fetchPosts());
    navigate('/');
  };

  return (
    <div>
      <h2>New post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titleInput">Title:</label>
          <input
            type="text"
            id="titleInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="bodyInput">Body:</label>
          <textarea
            id="bodyInput"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Create post</button>
        </div>
      </form>
    </div>
  );
}

export default NewPostForm;
