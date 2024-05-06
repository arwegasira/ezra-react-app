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
  Settings,
  Users,
  Rooms,
} from './Pages'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
//actions
import { action as loginAction } from './Pages/Login'

//loader
import { loader as landingLoader } from './Pages/Landing'
import { loader as homeLoader } from './Pages/Home'
import { loader as singleClientLoader } from './Pages/SingleClient'
import { loader as usersLoader } from './Pages/Users'
import { loader as roomsLoader } from './Pages/Rooms'
const queryClient = new QueryClient()
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
        loader: homeLoader,
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
        loader: singleClientLoader,
      },
      {
        path: 'settings',
        element: <Settings></Settings>,
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: 'users',
        element: <Users></Users>,
        errorElement: <ErrorElement></ErrorElement>,
        loader: usersLoader,
      },
      {
        path: 'rooms',
        element: <Rooms></Rooms>,
        errorElement: <ErrorElement></ErrorElement>,
        loader: roomsLoader,
      },
    ],
  },
  {
    path: 'login',
    element: <Login></Login>,
    action: loginAction(store),
    errorElement: <ErrorElement></ErrorElement>,
  },
  {
    path: 'verifyAccount',
    element: <VerifyAccount></VerifyAccount>,
    errorElement: <ErrorElement></ErrorElement>,
  },
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  )
}

export default App
