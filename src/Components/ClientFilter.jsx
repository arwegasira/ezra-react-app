import { Form } from 'react-router-dom'
import FormInput from './FormInput'
import { customFetch } from '../utils'
import { useSelector } from 'react-redux'
import { updateClientsFromApi } from '../feature/clients/clientSlice'
export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    try {
      const url = `/client/clients?idNumber=${data.idNumber}&&firstName=${data.firstName}&&lastName=${data.lastName}&&email=${data.email}&&phoneNumber=${data.phoneNumber}`
      const response = await customFetch(url)
      //store client in the client state
      store.dispatch(updateClientsFromApi(response.data.clients))
    } catch (error) {
      console.log(error)
      return null
    }
    return null
  }
const ClientFilter = () => {
  const { clients } = useSelector((store) => store.clientsState)
  console.log(clients)
  return (
    <section className='md:flex md:justify-center '>
      <Form
        method='POST'
        className='bg-base-200 px-4 py-8 rounded-lg shadow-lg w-full max-w-[70rem] grid gap-4 sm:grid-cols-2 md:grid-cols-3 sm:py-6 md:gap-y-1 md:px-10'
      >
        <FormInput
          label='ID/PC #'
          type='text'
          name='idNumber'
          size='input-sm'
        ></FormInput>
        <FormInput
          label='Phone Number'
          type='text'
          name='phoneNumber'
          size='input-sm'
        ></FormInput>
        <FormInput
          label='First Name'
          type='text'
          name='firstName'
          size='input-sm'
        ></FormInput>
        <FormInput
          label='Last Name'
          type='text'
          name='lastName'
          size='input-sm'
        ></FormInput>
        <FormInput
          label='Email'
          type='email'
          name='email'
          size='input-sm'
        ></FormInput>
        <div className='flex items-end'>
          <button
            type='submit'
            className='btn primary-btns btn-sm w-full rounded-lg'
          >
            Apply Filters
          </button>
        </div>
      </Form>
    </section>
  )
}
export default ClientFilter
