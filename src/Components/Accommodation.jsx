import { useLoaderData } from 'react-router-dom'
import { dateFormat, dateFormatShortMonth } from '../utils'

import { FaRegEdit } from 'react-icons/fa'
import { useState } from 'react'
const Accommodation = () => {
  const [checkout, setCheckout] = useState(false)
  const { client } = useLoaderData()
  let { activeAccommodation } = client
  const { startDate, endDate, roomDetails, unitPrice, totalCost } =
    activeAccommodation[0]
  const { roomType, name: roomName } = roomDetails

  return (
    <ul className='mt-4 flex flex-col gap-y-4 lg:flex-row lg:justify-between lg:shadow-md lg:rounded-lg lg:p-4'>
      <li className='flex justify-between pb-4 border-b lg:border-0 lg:flex-col'>
        <span className='font-semibold'>Start Date</span>{' '}
        <span>{dateFormatShortMonth(startDate)}</span>
      </li>

      <li className='flex justify-between pb-4 border-b lg:border-0 lg:flex-col'>
        <span className='font-semibold'>End Date</span>{' '}
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

      <li className='flex justify-between pb-4 border-b lg:border-0 lg:flex-col'>
        <span className='font-semibold'>Paid</span>
        <span>
          <input
            type='checkbox'
            defaultChecked={false}
            className='checkbox checkbox-sm'
            onClick={(e) => setCheckout(e.target.checked)}
          />
        </span>
      </li>

      <li className='mt-4 flex justify-between lg:flex-col gap-y-2'>
        <button type='button' className='text-2xl lg:flex lg:justify-center'>
          <FaRegEdit></FaRegEdit>
        </button>
        <button type='button' className='btn btn-sm primary-btns'>
          Avail Room
        </button>
        {checkout && (
          <button type='button' className='btn btn-sm primary-btns'>
            check Out
          </button>
        )}
      </li>
    </ul>
  )
}
export default Accommodation
