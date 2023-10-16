import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Test from './Test'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/test",
    element: <Test />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
