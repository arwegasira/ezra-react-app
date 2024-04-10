import { FaRegEdit } from 'react-icons/fa'

const Service = ({ serviceId, service, total }) => {
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
        <button type='button' className='text-2xl'>
          <FaRegEdit></FaRegEdit>
        </button>
      </li>
    </ul>
  )
}
export default Service
