import { customFetch } from '../utils'
import { redirect } from 'react-router-dom'
import {
  ClientInfoDetails,
  ClientProfile,
  EditDialog,
  Tabs,
} from '../Components'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import {
  AddAccommodation,
  EditUserProfile,
  EditAccommodation,
  AddService,
  EditService,
} from '../Components'

const formDialogs = {
  editUserProfile: <EditUserProfile></EditUserProfile>,
  addAccommodation: <AddAccommodation></AddAccommodation>,
  editAccommodation: <EditAccommodation></EditAccommodation>,
  addService: <AddService></AddService>,
  editService: <EditService></EditService>,
}
export const loader = async ({ params }) => {
  const { id } = params
  const url = `client/getclientbyid/${id}`

  try {
    const response = await customFetch(url)
    return { client: response.data.client }
  } catch (error) {
    const status = error?.response.status
    //unAuthorized
    if (status === 403) {
      return redirect('/login')
    }
    //unAuthenticated
    if (status === 401) {
      toast.warn('Unauthenticated, Login again')
      return redirect('/login')
    }
    return error
  }
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
