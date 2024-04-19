import { customFetch, dateFormatShortMonth } from '../utils'
import { useNavigate } from 'react-router-dom'
const UnpaidAccommodationSingle = ({
  startDate,
  endDate,
  roomType,
  roomName,
  unitPrice,
  totalCost,
  id,
  clientId,
}) => {
  const navigate = useNavigate()
  const checkoutClient = async (id) => {
    try {
      await customFetch.post(
        `/client/payaccommodation?clientId=${clientId}&accommodationId=${id}`
      )
      navigate(`/singleClient/${clientId}`)
    } catch (error) {}
  }
  return (
    <ul className='mt-4 flex flex-col gap-y-4 lg:flex-row lg:justify-between lg:shadow-md lg:rounded-lg lg:p-4'>
      <li className='flex justify-between pb-4 border-b lg:border-0 lg:flex-col'>
        <span className='font-semibold'>Start Date</span>
        <span>{dateFormatShortMonth(startDate)}</span>
      </li>

      <li className='flex justify-between pb-4 border-b lg:border-0 lg:flex-col'>
        <span className='font-semibold'>End Date</span>
        <span>{dateFormatShortMonth(endDate)}</span>
      </li>

      <li className='flex justify-between pb-4 border-b lg:border-0 lg:flex-col'>
        <span className='font-semibold'>Night(s)</span>{' '}
        <span className='text-center'>{totalCost / unitPrice}</span>
      </li>

      <li className='flex justify-between pb-4 border-b lg:border-0 lg:flex-col'>
        <span className='font-semibold'>Room</span> <span>{roomName}</span>
      </li>

      <li className='flex justify-between pb-4 border-b lg:border-0 lg:flex-col'>
        <span className='font-semibold'>Room Type</span> <span>{roomType}</span>
      </li>

      <li className='flex justify-between pb-4 border-b lg:border-0 lg:flex-col'>
        <span className='font-semibold'>Unit Price</span>
        <span className='text-center'>{unitPrice}</span>
      </li>

      <li className='flex justify-between pb-4 border-b lg:border-0 lg:flex-col'>
        <span className='font-semibold'>Total</span> <span>{totalCost}</span>
      </li>

      <li className='mt-4 flex justify-between lg:flex-col gap-y-2'>
        <button
          type='button'
          className='btn btn-sm primary-btns outline-0 focus:outline-0 '
          onClick={() => checkoutClient(id)}
        >
          Paid
        </button>
      </li>
    </ul>
  )
}
export default UnpaidAccommodationSingle
