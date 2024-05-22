import {
  EditDialog,
  FilterRooms,
  PaginationContainer,
  EditRoom,
  NewRoomForm,
} from '../Components'
import RoomsList from '../Components/RoomsList'
import { openEditDialog } from '../feature/EditDialog/editDialog'
import { customFetch } from '../utils'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { redirect } from 'react-router-dom'

export const loader = async ({ request }) => {
  const url = new URL(request.url)
  const params = Object.fromEntries(url.searchParams.entries())
  try {
    const response = await customFetch.get(
      `/rooms?name=${params.name ? params.name : ''}&roomType=${
        params.roomType ? params.roomType : ''
      }&status=${params.status ? params.status : ''}`
    )

    return {
      rooms: response?.data?.rooms,
      params,
      page: response?.data?.page,
      pageCount: response?.data?.numOfPages,
    }
  } catch (error) {
    const status = error?.response.status
    //unAuthorized
    if (status === 403) {
      return redirect('/home')
    }
    //unAuthenticated
    if (status === 401) {
      toast.warn('Unauthenticated, Login again')
      return redirect('/login')
    }
    return error
  }
}
const forms = {
  editRoom: <EditRoom></EditRoom>,
  newRoom: <NewRoomForm></NewRoomForm>,
}
const Rooms = () => {
  const { currentForm } = useSelector((store) => store.editDialogState)
  const dispatch = useDispatch()
  return (
    <>
      <section className='mb-8 flex justify-center sm:justify-end w-[90%] max-w-[80rem] mx-auto'>
        <button
          type='button'
          className='btn primary-btns btn-sm w-[90%] max-w-72'
          onClick={() => dispatch(openEditDialog({ currentForm: 'newRoom' }))}
        >
          New Room
        </button>
      </section>
      <FilterRooms></FilterRooms>
      <EditDialog>{forms[currentForm]}</EditDialog>
      <RoomsList></RoomsList>
      <PaginationContainer></PaginationContainer>
    </>
  )
}
export default Rooms
