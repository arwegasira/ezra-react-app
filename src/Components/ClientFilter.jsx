import { Form, useLoaderData, useNavigate } from 'react-router-dom'
import FormInput from './FormInput'
import { customFetch } from '../utils'
import { useSelector } from 'react-redux'
import { updateClientsFromApi } from '../feature/clients/clientSlice'

const ClientFilter = () => {
  const { params } = useLoaderData()
  const navigate = useNavigate()
  return (
    <section className='md:flex md:justify-center '>
      <Form className='bg-blue-50 px-4 py-8 rounded-lg shadow-sm w-full grid gap-4 sm:grid-cols-2 md:grid-cols-3 sm:py-6 md:gap-y-1 md:px-10 lg:py-12'>
        <FormInput
          label='ID/PC #'
          type='text'
          name='idNumber'
          size='input-sm'
          defaultValue={params.idNumber && params.idNumber}
        ></FormInput>
        <FormInput
          label='Phone Number'
          type='text'
          name='phoneNumber'
          size='input-sm'
          defaultValue={params.phoneNumber && params.phoneNumber}
        ></FormInput>
        <FormInput
          label='Name'
          type='text'
          name='name'
          size='input-sm'
          defaultValue={params.name && params.name}
        ></FormInput>

        <FormInput
          label='Email'
          type='email'
          name='email'
          size='input-sm'
          defaultValue={params.email && params.email}
        ></FormInput>
        <div className='flex items-end'>
          <button
            type='submit'
            className='btn primary-btns btn-sm w-full rounded-lg'
          >
            Apply Filters
          </button>
        </div>
        <div className='flex items-end'>
          <button
            type='button'
            className='btn secondary-btns btn-sm w-full rounded-lg'
            onClick={() => navigate('/home')}
          >
            Clear Filters
          </button>
        </div>
      </Form>
    </section>
  )
}
export default ClientFilter
