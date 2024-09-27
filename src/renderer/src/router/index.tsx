import LoginPage from '@/pages/login-page'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/',
    element: <LoginPage />
  }
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router
