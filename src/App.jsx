import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ErrorElement } from './Components'
import {
  Home,
  Landing,
  SingleClient,
  Login,
  RegisterClient,
  VerifyAccount,
  Error,
  Layout,
} from './Pages'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Landing></Landing>,
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: 'home',
        element: <Home></Home>,
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: 'registerClient',
        element: <RegisterClient></RegisterClient>,
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: 'singleClient/:id',
        element: <SingleClient></SingleClient>,
        errorElement: <ErrorElement></ErrorElement>,
      },
    ],
  },
  { path: 'login', element: <Login></Login> },
  { path: 'verifyAccount', element: <VerifyAccount></VerifyAccount> },
])
function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
