import { useLoaderData } from 'react-router-dom'
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
      <div className='mt-12 flex flex-col gap-4 md:flex-row md:justify-around md:border md:px-4 md:py-0 bg-red-200'>
        {/* General info */}
        <div className='py-3 border-b flex flex-col gap-1 md:border-b-0 md:border-r md:pr-6 md:py-6'>
          <p className='flex gap-1'>
            <span className='font-medium'>Nationality:</span>
            <span>{nationality}</span>
          </p>
          <p className='flex gap-1'>
            <span className='font-medium'>DOB:</span>
            <span>{dob}</span>
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
        <div className='py-3 border-b flex flex-col gap-1'>
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
        <div className='py-3 border-b flex flex-col gap-1'>
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
