import { Form } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../Components'
const Login = () => {
  return (
    <section className='align-element grid place-items-center h-[100svh]'>
      <Form className='flex flex-col gap-4 pt-4 bg-gray-50 p-4 card rounded-md shadow-md w-[80%] max-w-[25rem]'>
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
