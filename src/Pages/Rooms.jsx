import { FilterRooms } from '../Components'
import RoomsList from '../Components/RoomsList'
import { customFetch } from '../utils'

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
    return error
  }
}
const Rooms = () => {
  return (
    <>
      <section className='mb-8 flex justify-center sm:justify-end w-[90%] max-w-[70rem] mx-auto'>
        <button
          type='button'
          className='btn primary-btns btn-sm w-[90%] max-w-72'
        >
          New User
        </button>
      </section>
      <FilterRooms></FilterRooms>
      <RoomsList></RoomsList>
    </>
  )
}
export default Rooms
