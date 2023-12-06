import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/posts/postsSlice';
import { Link } from 'react-router-dom';

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
        <Link key={post.id} to={`/posts/${post.id}`}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </Link>
      ))}
    </div>
  );
}

export default Posts;
