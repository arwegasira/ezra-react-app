import { useLoaderData } from 'react-router-dom'
import { FaRegEdit } from 'react-icons/fa'
import { dateFormatShortMonth } from '../utils'
import { useDispatch } from 'react-redux'
import { openEditDialog } from '../feature/EditDialog/editDialog'
const RoomsList = () => {
  const { rooms } = useLoaderData()
  const dispatch = useDispatch()
  return (
    <section className='mt-10 md:flex md:justify-center overflow-x-scroll'>
      <table className='table table-xs md:table-md w-full md:w-[90%] md:max-w-[80rem]'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Price</th>
            <th>Status</th>
            <th>From</th>
            <th>To</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, idx) => {
            const {
              name,
              price,
              status,
              roomType,
              accupationEnd: occupationEnd,
              accupationStart: occupationStart,
              _id: roomId,
            } = room

            return (
              <tr key={roomId} className='hover'>
                <td>{name}</td>
                <td>{roomType}</td>
                <td>{price}</td>
                <td>{status}</td>
                <td>
                  {occupationStart ? dateFormatShortMonth(occupationStart) : ''}
                </td>
                <td>
                  {occupationEnd ? dateFormatShortMonth(occupationEnd) : ''}
                </td>
                <td className='flex justify-end'>
                  <button
                    type='button'
                    className='text-sm md:text-lg'
                    onClick={() =>
                      dispatch(openEditDialog({ currentForm: 'editRoom' }))
                    }
                  >
                    <FaRegEdit></FaRegEdit>
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}
export default RoomsList
