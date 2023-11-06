import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Test from './Test'
import Test2 from './Test2'
import Cart from "./Cart"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/test",
    element: <Test />
  },
  {
    path: "/test2",
    element: <Test2 />
  },
  {
    path: "/cart",
    element: <Cart />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
