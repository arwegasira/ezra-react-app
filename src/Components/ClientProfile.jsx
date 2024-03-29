import { useLoaderData } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FaRegEdit } from 'react-icons/fa'
import { FaRegUser } from 'react-icons/fa6'
import { openEditDialog } from '../feature/EditDialog/editDialog'

const ClientProfile = () => {
  const { client } = useLoaderData()
  const { firstName, lastName, middleName } = client
  const dispatch = useDispatch()
  const handleOpenDialog = () => {
    dispatch(openEditDialog({ currentForm: 'editUserProfile' }))
  }
  return (
    <>
      <div className='mt-8 flex justify-center gap-2'>
        <FaRegUser className='text-5xl'></FaRegUser>
        <div className='flex flex-col gap-0'>
          <p className='p-0 m-0 text-md font-medium'>{firstName}</p>
          <p className='p-0 m-0 text-md font-medium '>{middleName}</p>
          <p className='p-0 m-0 text-md font-medium '>{lastName}</p>
          <button onClick={handleOpenDialog} className='outline-0'>
            <FaRegEdit className='text-2xl mt-1'></FaRegEdit>
          </button>
        </div>
      </div>
    </>
  )
}
export default ClientProfile
