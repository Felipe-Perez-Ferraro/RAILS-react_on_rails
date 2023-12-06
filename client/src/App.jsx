import Posts from './components/Posts';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Posts />
        </>
      ),
    },
  ]);
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
