import { useLoaderData } from 'react-router-dom'
import { dateFormat } from '../utils'
const ClientInfoDetails = () => {
  const { client } = useLoaderData()
  const {
    nationality,
    dob,
    profesional: profession,
    company,
    phoneNumber,
    email,
    city,
    state,
    country,
  } = client

  return (
    <>
      <div className='mt-10 flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:border lg:px-4 lg:py-0'>
        {/* General info */}
        <div className='py-3 border-b flex flex-col gap-1 lg:border-b-0 lg:border-r lg:pr-6 lg:py-6'>
          <p className='flex gap-1'>
            <span className='font-medium'>Nationality:</span>
            <span>{nationality}</span>
          </p>
          <p className='flex gap-1'>
            <span className='font-medium'>DOB:</span>
            <span>{dateFormat(dob)}</span>
          </p>
          <p className='flex gap-1'>
            <span className='font-medium'>Profession:</span>
            <span>{profession}</span>
          </p>
          <p className='flex gap-1'>
            <span className='font-medium'>Company:</span>
            <span>{company}</span>
          </p>
        </div>
        {/* Contact info */}
        <div className='py-3 border-b flex flex-col gap-1 lg:border-b-0 lg:border-r lg:pr-6 lg:py-6'>
          <p className='flex gap-1'>
            <span className='font-medium'>Phone #:</span>
            <span>{phoneNumber}</span>
          </p>
          <p className='flex gap-1'>
            <span className='font-medium'>Email:</span>
            <span>{email}</span>
          </p>
        </div>
        {/* Address info */}
        <div className='py-3 border-b flex flex-col gap-1 lg:border-b-0  lg:pr-6 lg:py-6'>
          <p className='flex gap-1'>
            <span className='font-medium'>City:</span>
            <span>{city}</span>
          </p>
          <p className='flex gap-1'>
            <span className='font-medium'>State:</span>
            <span>{state}</span>
          </p>
          <p className='flex gap-1'>
            <span className='font-medium'>Country</span>
            <span>{country}</span>
          </p>
        </div>
      </div>
    </>
  )
}
export default ClientInfoDetails
