import { FaRegEdit } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { openEditDialog } from '../feature/EditDialog/editDialog'
const Service = ({ serviceId, service, total }) => {
  const dispatch = useDispatch()
  const handleEdit = ({ service, serviceId, total }) => {
    //update edit service global state
    dispatch(openEditDialog({ currentForm: 'editService' }))
  }
  return (
    <ul className='mt-4 grid grid-cols-3 border-b pb-4'>
      <li className='flex flex-col'>
        <span className='font-semibold'>Service</span>
        <span>{service}</span>
      </li>
      <li className='flex flex-col'>
        <span className='font-semibold'>Amount</span>
        <span>{total}</span>
      </li>
      <li className='self-center justify-self-end'>
        <button
          type='button'
          className='text-2xl outline-0 focus:outline-0'
          onClick={() => handleEdit({ service, total, serviceId })}
        >
          <FaRegEdit></FaRegEdit>
        </button>
      </li>
    </ul>
  )
}
export default Service
