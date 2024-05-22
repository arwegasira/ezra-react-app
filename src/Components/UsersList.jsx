import { useLoaderData } from 'react-router-dom'
import { FaUserEdit } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { openEditDialog } from '../feature/EditDialog/editDialog'
import { setCurrentUser } from '../feature/user/editUser'
const UsersList = () => {
  const { users } = useLoaderData()
  const dispatch = useDispatch()
  const handleEdit = ({
    firstName,
    lastName,
    email,
    role,
    isActive,
    userId,
  }) => {
    dispatch(openEditDialog({ currentForm: 'editUserAccount' }))
    dispatch(
      setCurrentUser({ firstName, lastName, email, role, isActive, userId })
    )
  }
  return (
    <section className='mt-10 md:flex md:justify-center overflow-x-scroll'>
      <table className='table table-xs md:table-md w-full md:w-[90%] md:max-w-[80rem] shadow-sm'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const {
              firstName,
              lastName,
              role,
              email,
              _id: userId,
              isActive,
            } = user
            return (
              <tr key={userId} className='hover'>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{role}</td>
                <td className='flex flex-end'>
                  <button
                    type='button'
                    className='hidden lg:block text-sm md:text-lg outline-0 focus:outline-0'
                    onClick={() =>
                      handleEdit({
                        firstName,
                        lastName,
                        role,
                        email,
                        isActive,
                        userId,
                      })
                    }
                  >
                    <FaUserEdit></FaUserEdit>
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}
export default UsersList
