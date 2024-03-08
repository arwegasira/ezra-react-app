import { Form } from 'react-router-dom'
import FormInput from './FormInput'

const ClientFilter = () => {
  return (
    <section className='md:flex md:justify-center '>
      <Form
        method='POST'
        className='bg-base-200 px-4 py-8 rounded-lg shadow-lg w-full max-w-[60rem] grid gap-4 sm:grid-cols-2 md:grid-cols-3 sm:py-6 md:gap-y-1'
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
