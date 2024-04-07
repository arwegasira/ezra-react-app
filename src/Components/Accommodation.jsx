import { useLoaderData, useNavigate } from 'react-router-dom'
import { customFetch, dateFormat, dateFormatShortMonth } from '../utils'
import { useDispatch } from 'react-redux'
import { openEditDialog } from '../feature/EditDialog/editDialog'

import { FaRegEdit } from 'react-icons/fa'
import { useState } from 'react'
const Accommodation = () => {
  const [checkout, setCheckout] = useState(false)
  const { client } = useLoaderData()
  const { activeAccommodation, _id: clientId } = client
  const { startDate, endDate, roomDetails, unitPrice, totalCost } =
    activeAccommodation[0]
  const { roomType, name: roomName } = roomDetails
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const availRoom = async () => {
    try {
      const response = await customFetch.patch(`/client/availRoom/${clientId}`)
      navigate(`/singleClient/${clientId}`)
    } catch (error) {}
  }
  const checkoutClient = async () => {
    try {
      await customFetch.post(`/client/checkout/${clientId}`)
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
        <button
          type='button'
          className='text-2xl outline-0 focus:outline-0 lg:flex lg:justify-center'
          onClick={() =>
            dispatch(openEditDialog({ currentForm: 'editAccommodation' }))
          }
        >
          <FaRegEdit></FaRegEdit>
        </button>
        <button
          type='button'
          className='btn btn-sm primary-btns outline-0 focus:outline-0 '
          onClick={availRoom}
        >
          Avail Room
        </button>
        {checkout && (
          <button
            type='button'
            className='btn btn-sm primary-btns outline-0 focus:outline-0 '
            onClick={checkoutClient}
          >
            check Out
          </button>
        )}
      </li>
    </ul>
  )
}
export default Accommodation
