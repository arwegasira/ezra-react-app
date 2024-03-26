import { customFetch } from '../utils'
import { useLoaderData } from 'react-router-dom'
import { ClientInfoDetails, ClientProfile, EditDialog } from '../Components'
import { useSelector, useDispatch } from 'react-redux'
import EditUserProfile from '../Components/EditUserProfile'

const formDialogs = {
  editUserProfile: <EditUserProfile></EditUserProfile>,
}
export const loader = async ({ params }) => {
  const { id } = params
  const url = `client/getclientbyid/${id}`
  const response = await customFetch(url)

  return { client: response.data.client }
}
const SingleClient = () => {
  const { currentForm } = useSelector((store) => store.editDialogState)
  const current = formDialogs[currentForm]

  return (
    <>
      <ClientProfile></ClientProfile>
      <ClientInfoDetails></ClientInfoDetails>
      <EditDialog>{current}</EditDialog>
    </>
  )
}
export default SingleClient
