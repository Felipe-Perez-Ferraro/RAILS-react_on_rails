import { createBrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';

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
