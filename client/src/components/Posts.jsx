import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deletePost, fetchPosts } from '../redux/postsFunc';

function Posts() {
  const { posts } = useSelector((state) => state.posts);
  const { isFetched } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchPosts());
    }
  }, [dispatch, isFetched]);

  const handleDelete = (id) => {
    dispatch(deletePost(id));
    dispatch(fetchPosts());
    navigate('/');
  };

  return (
    <div>
      {posts.map((post) => (
        <article key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </Link>
          <div className="flex justify-between">
            <Link to={`/posts/${post.id}/edit`} className="bg-green-600 py-1 rounded w-16 text-center text-white font-semibold">Edit</Link>
            <button type="button" onClick={() => handleDelete(post.id)} className="bg-red-600 py-1 rounded w-16 text-center text-white font-semibold">
              Delete
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Posts;
