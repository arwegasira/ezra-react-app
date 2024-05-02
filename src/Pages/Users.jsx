import { PaginationContainer } from '../Components'
import UserFilter from '../Components/UserFilter'
import UsersList from '../Components/UsersList'
import { customFetch } from '../utils'

export const loader = async ({ request }) => {
  const url = new URL(request.url)
  const params = Object.fromEntries(url.searchParams.entries())
  try {
    const response = await customFetch.get(
      `/users?name=${params.name ? params.name : ''}&email=${
        params.email ? params.email : ''
      }&role=${params.role ? params.role : ''}&page=${
        params.page ? params.page : ''
      }`
    )

    return {
      users: response?.data?.users,
      meta: response.data.meta,
      params,
      pageCount: response?.data?.meta?.numOfPages,
      page: response?.data?.meta?.page,
    }
  } catch (error) {
    return error
  }
}
const Users = () => {
  return (
    <div>
      <div className='mb-8 flex justify-center sm:justify-end w-[90%] max-w-[70rem] mx-auto'>
        <button
          type='button'
          className='btn primary-btns btn-sm w-[90%] max-w-72'
        >
          New User
        </button>
      </div>
      <UserFilter></UserFilter>
      <UsersList></UsersList>
      <PaginationContainer></PaginationContainer>
    </div>
  )
}
export default Users
