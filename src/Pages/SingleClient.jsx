import { customFetch } from '../utils'
import { useLoaderData } from 'react-router-dom'
import {
  ClientInfoDetails,
  ClientProfile,
  EditDialog,
  Tabs,
} from '../Components'
import { useSelector, useDispatch } from 'react-redux'
import {
  AddAccommodation,
  EditUserProfile,
  EditAccommodation,
  AddService,
} from '../Components'

const formDialogs = {
  editUserProfile: <EditUserProfile></EditUserProfile>,
  addAccommodation: <AddAccommodation></AddAccommodation>,
  editAccommodation: <EditAccommodation></EditAccommodation>,
  addService: <AddService></AddService>,
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
      <Tabs></Tabs>
    </>
  )
}
export default SingleClient
