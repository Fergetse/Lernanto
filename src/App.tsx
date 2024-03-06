
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Login from './routes/Login'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },])

  return (
    <div className=" max-w-[1920px]">
          <RouterProvider router={router}></RouterProvider>
      </div>
  )
}

export default App
