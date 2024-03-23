import { customFetch } from '../utils'
import { useLoaderData } from 'react-router-dom'
import { ClientInfoDetails, ClientProfile } from '../Components'
export const loader = async ({ params }) => {
  const { id } = params
  const url = `client/getclientbyid/${id}`
  const response = await customFetch(url)

  return { client: response.data.client }
}
const SingleClient = () => {
  const { client } = useLoaderData()
  const {
    firstName,
    lastName,
    middleName,
    nationality,
    dob,
    profesional: profession,
    company,
    phoneNumber,
    email,
    city,
    state,
    country,
  } = client
  return (
    <>
      <ClientProfile></ClientProfile>
      <ClientInfoDetails></ClientInfoDetails>
    </>
  )
}
export default SingleClient
