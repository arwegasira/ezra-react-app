import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { store } from './store'
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

//actions
import { action as loginAction } from './Pages/Login'
import { action as SearchClientAction } from './Components/ClientFilter'

//loader
import { loader as landingLoader } from './Pages/Landing'

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
        loader: landingLoader(store),
      },
      {
        path: 'home',
        element: <Home></Home>,
        errorElement: <ErrorElement></ErrorElement>,
        action: SearchClientAction(store),
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
  { path: 'login', element: <Login></Login>, action: loginAction(store) },
  { path: 'verifyAccount', element: <VerifyAccount></VerifyAccount> },
])
function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
