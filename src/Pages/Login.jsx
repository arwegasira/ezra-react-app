import { Form } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../Components'
const Login = () => {
  return (
    <section className='align-element grid place-items-center h-[100svh]'>
      <Form className='bg-gray-200 p-4 rounded-md shadow-md w-[80%] max-w-[33rem]'>
        <h4 className='text-center my-2 font-medium text-lg sm:text-xl tracking-wide'>
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

        <div className='my-3'>
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
