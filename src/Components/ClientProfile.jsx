import { useLoaderData } from 'react-router-dom'
import { FaRegEdit } from 'react-icons/fa'
import { FaRegUser } from 'react-icons/fa6'
const ClientProfile = () => {
  const { client } = useLoaderData()
  const { firstName, lastName, middleName } = client
  return (
    <>
      <div className='mt-10 flex justify-center gap-2'>
        <FaRegUser className='text-5xl'></FaRegUser>
        <div className='flex flex-col gap-0'>
          <p className='p-0 m-0 text-md font-medium'>{firstName}</p>
          <p className='p-0 m-0 text-md font-medium '>{middleName}</p>
          <p className='p-0 m-0 text-md font-medium '>{lastName}</p>
          <FaRegEdit className='text-2xl mt-1'></FaRegEdit>
        </div>
      </div>
    </>
  )
}
export default ClientProfile
