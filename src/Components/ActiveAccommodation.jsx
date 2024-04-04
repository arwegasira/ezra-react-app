import { useLoaderData } from 'react-router-dom'
import SectionTitle from './SectionTitle'
import { openEditDialog } from '../feature/EditDialog/editDialog'
import { useDispatch } from 'react-redux'
import { setResetRoomPrice } from '../feature/Room/room'
const ActiveAccommodation = () => {
  const { client } = useLoaderData()
  const { activeAccommodation } = client
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(openEditDialog({ currentForm: 'addAccommodation' }))
    dispatch(setResetRoomPrice({ price: null }))
  }
  return (
    <article>
      <SectionTitle
        title='Active Accommodation'
        textSize='text-2xl'
      ></SectionTitle>
      {activeAccommodation.length ? (
        ''
      ) : (
        <button
          type='button'
          className='btn btn-sm primary-btns mt-4 outline-0 focus:outline-0'
          onClick={handleClick}
        >
          New Accommodation
        </button>
      )}
    </article>
  )
}
export default ActiveAccommodation
