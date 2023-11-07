
import './App.css'
import Home from './pages/Home'
import First from './pages/First'
import Seconde from './pages/Seconde'
import Third from './pages/third'
import Fourth from './pages/Fourth'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: 'First',
        element: <First />,
      },
      {
        path: 'Seconde',
        element: <Seconde />,
      },
      {
        path: 'Third',
        element: <Third />,
      },
      {
        path: 'Fourth',
        element: <Fourth />,
      },
    ],
  },
]);

  function App() {
    return <RouterProvider router={router} />;
  }


export default App
