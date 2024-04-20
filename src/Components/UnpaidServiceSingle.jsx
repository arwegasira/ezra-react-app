import { useNavigate } from 'react-router-dom'
import { customFetch } from '../utils'
const UnpaidServiceSingle = ({ service, total, serviceId, clientId }) => {
  const navigate = useNavigate()
  const payService = async (serviceId) => {
    try {
      await customFetch.post(
        `/client/payunpaidservice?client=${clientId}&service=${serviceId}`
      )
      navigate(`/singleClient/${clientId}`)
    } catch (error) {}
  }
  return (
    <ul className='mt-4 grid grid-cols-2 lg:grid-cols-3 pb-4 border-b lg:border-0 lg:shadow lg:rounded-lg lg:p-4'>
      <li className='flex flex-col '>
        <span className='font-semibold'>Service</span>
        <span>{service}</span>
      </li>

      <li className='flex flex-col'>
        <span className='font-semibold'>Amount</span>
        <span>{total}</span>
      </li>

      <li className='hidden lg:block lg:justify-self-end '>
        <button
          type='button'
          className='btn btn-sm primary-btns outline-0 focus:outline-0 '
          onClick={() => payService(serviceId)}
        >
          Paid
        </button>
      </li>
    </ul>
  )
}
export default UnpaidServiceSingle
