import { useLoaderData } from 'react-router-dom'
import { FaUserEdit } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { openEditDialog } from '../feature/EditDialog/editDialog'
import { setCurrentUser } from '../feature/user/editUser'
const UsersList = () => {
  const { users } = useLoaderData()
  const dispatch = useDispatch()
  const handleEdit = ({ firstName, lastName, email, role }) => {
    dispatch(openEditDialog({ currentForm: 'editUserAccount' }))
    dispatch(setCurrentUser({ firstName, lastName, email, role }))
  }
  return (
    <section className='mt-10 md:flex md:items-center md:flex-col '>
      {users.map((user) => {
        const { firstName, lastName, role, email, _id: userId } = user
        return (
          <ul
            key={userId}
            className='w-full md:w-[90%] md:max-w-[70rem]  mb-6 bg-neutral-200 lg:bg-neutral-100 bg-shadow-md rounded lg:rounded-lg lg:grid lg:grid-cols-4'
          >
            <li className='p-4  lg:py-2 flex justify-between lg:flex-col lg:flex-wrap text-sm md:text-base'>
              <span className='font-medium'>First Name</span>
              <span>{firstName}</span>
            </li>
            <li className='p-4  lg:py-2 flex justify-between lg:flex-col lg:flex-wrap text-sm md:text-base'>
              <span className='font-medium'>Last Name</span>
              <span>{lastName}</span>
            </li>
            <li className='p-4 lg:py-2 flex justify-between  lg:flex-col lg:flex-wrap text-sm md:text-base '>
              <span className='font-medium'>Email</span>
              <span>{email}</span>
            </li>
            <li className='p-4 lg:py-2 lg:flex lg:justify-between'>
              <div className='flex justify-between lg:flex-col lg:flex-wrap text-sm md:text-base'>
                <span className='font-medium'>Role</span>
                <span>{role}</span>
              </div>
              <button
                type='button'
                className='hidden lg:block lg:text-2xl outline-0 focus:outline-0'
                onClick={() => handleEdit({ firstName, lastName, role, email })}
              >
                <FaUserEdit></FaUserEdit>
              </button>
            </li>
          </ul>
        )
      })}
    </section>
  )
}
export default UsersList
