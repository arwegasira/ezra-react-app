import { FaRegEdit } from 'react-icons/fa'
import { MdOutlineDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { openEditDialog } from '../feature/EditDialog/editDialog'
import { setCurrentService } from '../feature/Services/editServiceSlice'
import { customFetch } from '../utils'
import { useLoaderData, useNavigate } from 'react-router-dom'
const Service = ({ serviceId, service, total }) => {
  const {
    client: { _id: clientId },
  } = useLoaderData()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleEdit = ({ service, serviceId, total }) => {
    //update edit service global state
    dispatch(setCurrentService({ service, serviceId, amount: total }))
    //open edit dialog
    dispatch(openEditDialog({ currentForm: 'editService' }))
  }
  const deleteService = async ({ serviceId }) => {
    try {
      await customFetch.patch(
        `/client/deleteservice?client=${clientId}&service=${serviceId}`
      )
      navigate(`/singleClient/${clientId}`)
    } catch (error) {}
  }
  return (
    <ul className='mt-4 grid grid-cols-2 lg:grid-cols-3 border-b pb-4'>
      <li className='flex flex-col'>
        <span className='font-semibold'>Service</span>
        <span>{service}</span>
      </li>
      <li className='flex flex-col'>
        <span className='font-semibold'>Amount</span>
        <span>{total}</span>
      </li>
      <li className='hidden lg:flex lg:justify-around  '>
        <button
          type='button'
          className='btn secondary-btns btn-sm outline-0 focus:outline-0'
        >
          Mark Unpaid
        </button>
        <button
          type='button'
          className='btn primary-btns btn-sm outline-0 focus:outline-0'
        >
          Paid
        </button>
        <button
          type='button'
          className='text-3xl outline-0 focus:outline-0 self-start'
          onClick={() => deleteService({ serviceId })}
        >
          <MdOutlineDelete></MdOutlineDelete>
        </button>
        <button
          type='button'
          className='text-2xl outline-0 focus:outline-0 self-start'
          onClick={() => handleEdit({ service, total, serviceId })}
        >
          <FaRegEdit></FaRegEdit>
        </button>
      </li>
    </ul>
  )
}
export default Service
