import { ClientFilter, PaginationContainer } from '../Components'
import { useSelector } from 'react-redux'
import { ClientsContainer } from '../Components'
import { customFetch } from '../utils'
import { useNavigate } from 'react-router-dom'

const clientsQuery = (params, url) => {
  const { idNumber, phoneNumber, email, firstName, lastName, page } = params

  return {
    queryKey: [
      'clients',
      idNumber ?? '',
      phoneNumber ?? '',
      email ?? '',
      lastName ?? '',
      firstName ?? '',
      Number(page) ?? 1,
    ],
    queryFn: () => customFetch.get(url),
  }
}
export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ])

    try {
      const url = `/client/clients?idNumber=${params.idNumber}&&firstName=${params.firstName}&&lastName=${params.lastName}&&email=${params.email}&&phoneNumber=${params.phoneNumber}&&page=${params.page}`
      const response = await queryClient.ensureQueryData(
        clientsQuery(params, url)
      )

      return {
        params,
        clients: response.data.clients,
        pageCount: response.data.numofPages,
        page: response.data.page,
        totalClients: response.data.totalClients,
      }
    } catch (error) {
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
