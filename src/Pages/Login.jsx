import { Form } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../Components'
const Login = () => {
  return (
    <section className='align-element h-[100svh] px-1 mt-12 sm:grid place-items-center'>
      <Form className='flex flex-col gap-4 pt-4 bg-gray-50 p-4 card rounded-md shadow-md px-1 sm:w-[25rem] px-4'>
        <h4 className='text-center font-medium text-2xl sm:text-3xl tracking-wide'>
          Login
        </h4>

        <FormInput
          label='Email'
          placeholder='Email'
          type='email'
          name='email'
          borderRadius='rounded-md'
        ></FormInput>
        <FormInput
          label='password'
          placeholder='password'
          type='password'
          name='password'
          borderRadius='rounded-md'
        ></FormInput>

        <div className='mb-8'>
          <SubmitBtn
            text='Login'
            size='btn-md'
            borderRadius='rounded-md'
          ></SubmitBtn>
        </div>
      </Form>
    </section>
  )
}
export default Login
