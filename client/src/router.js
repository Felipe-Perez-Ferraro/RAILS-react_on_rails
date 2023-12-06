import { createBrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';
import NewPostForm from './components/NewPostForm';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <NavBar />
        <Posts />
      </>
    ),
  },
  {
    path: '/new',
    element: (
      <>
        <NavBar />
        <NewPostForm />
      </>
    ),
  },
  {
    path: '/posts/:id',
    element: (
      <>
        <NavBar />
        <PostDetails />
      </>
    ),
  },
]);
