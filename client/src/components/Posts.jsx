import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/posts/postsSlice';

function Posts() {
  const { posts } = useSelector((state) => state.posts);
  const { isFetched } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchPosts());
    }
  }, [dispatch, isFetched]);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
