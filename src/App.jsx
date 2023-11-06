
import './App.css'
import Home from './pages/Home'
import Seconde from './pages/Seconde'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  return (
    <>
    <Home />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      // {
      //   path: 'First',
      //   element: <First />,
      // },
      {
        path: 'Seconde',
        element: <Seconde />,
      },
    ],
  },
]);

export default App
