import { ClientFilter } from '../Components'
import { useSelector } from 'react-redux'
import { ClientsContainer } from '../Components'
import { customFetch } from '../utils'

const clientsQuery = (params, url) => {
  const { idNumber, phoneNumber, email, firstName, lastName } = params

  return {
    queryKey: [
      'clients',
      idNumber ?? '',
      phoneNumber ?? '',
      email ?? '',
      lastName ?? '',
      firstName ?? '',
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
    console.log(params)
    try {
      const url = `/client/clients?idNumber=${params.idNumber}&&firstName=${params.firstName}&&lastName=${params.lastName}&&email=${params.email}&&phoneNumber=${params.phoneNumber}`
      const response = await queryClient.ensureQueryData(
        clientsQuery(params, url)
      )

      return {
        params,
        clients: response.data.clients,
        pages: response.data.numofPages,
        totalClients: response.data.totalClients,
      }
    } catch (error) {
      return error
    }
  }
const Home = () => {
  const { clients } = useSelector((store) => store.clientsState)

  return (
    <>
      <ClientFilter></ClientFilter>
      <ClientsContainer></ClientsContainer>
    </>
  )
}
export default Home
