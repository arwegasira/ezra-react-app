import { ClientFilter, PaginationContainer } from '../Components'
import { useSelector } from 'react-redux'
import { ClientsContainer } from '../Components'
import { customFetch } from '../utils'
import { useNavigate, redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
// stop caching
// const clientsQuery = (params, url) => {
//   const { idNumber, phoneNumber, email, firstName, lastName, page } = params

//   return {
//     queryKey: [
//       'clients',
//       idNumber ?? '',
//       phoneNumber ?? '',
//       email ?? '',
//       lastName ?? '',
//       firstName ?? '',
//       Number(page) ?? 1,
//     ],
//     queryFn: () => customFetch.get(url),
//   }
// }
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ])

  try {
    const url = `/client/clients?idNumber=${
      params.idNumber ? params.idNumber : ''
    }&&firstName=${params.firstName ? params.firstName : ''}&&lastName=${
      params.lastName ? params.lastName : ''
    }&&email=${params.email ? params.email : ''}&&phoneNumber=${
      params.phoneNumber ? params.phoneNumber : ''
    }&&page=${params.page ? params.page : ''}&&name=${
      params.name ? params.name : ''
    }`
    // const response = await queryClient.ensureQueryData(
    //   clientsQuery(params, url)
    // )
    const response = await customFetch.get(url)

    return {
      params,
      clients: response.data.clients,
      pageCount: response.data.numofPages,
      page: response.data.page,
      totalClients: response.data.totalClients,
    }
  } catch (error) {
    const status = error?.response.status
    //unAuthorized
    if (status === 403) {
    }
    //unAuthenticated
    if (status === 401) {
      toast.warn('Unauthenticated, Login again')
      return redirect('/login')
    }
    return error
  }
}
const Home = () => {
  const navigate = useNavigate()
  const { clients } = useSelector((store) => store.clientsState)

  return (
    <>
      <div className='mb-8 flex justify-center sm:justify-end'>
        <button
          type='button'
          className='btn primary-btns btn-sm w-[90%] max-w-72'
          onClick={() => navigate('/registerClient')}
        >
          New Client
        </button>
      </div>

      <ClientFilter></ClientFilter>
      <ClientsContainer></ClientsContainer>
      <PaginationContainer></PaginationContainer>
    </>
  )
}
export default Home
