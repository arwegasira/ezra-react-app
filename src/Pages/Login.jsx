import { Form, redirect } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../Components'
import { customFetch } from '../utils'
import { login } from '../feature/user/userSlice'
import { toast } from 'react-toastify'

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    try {
      const response = await customFetch.post('/auth/login', data)
      //dispatch login and redirect to home
      store.dispatch(login(response.data.user))
      return redirect('/home')
    } catch (error) {
      //tost error
      const msg =
        error?.response?.data || 'Something went wrong,try again later'
      toast.error(msg)
      return null
    }
    return null
  }

const Login = () => {
  return (
    <section className='align-element h-[100svh] px-1 mt-12 sm:grid place-items-center'>
      <Form
        method='POST'
        className='flex flex-col gap-4 pt-4 bg-gray-50 p-4 card rounded-md shadow-md px-1 sm:w-[25rem] px-4'
      >
        <h4 className='text-center font-medium text-2xl sm:text-3xl tracking-wide'>
          Login
        </h4>

        <FormInput
          label='Email'
          placeholder='Email'
          type='email'
          name='email'
          borderRadius='rounded-md'
          defaultValue='ac.rwegasira@gmail.com'
        ></FormInput>
        <FormInput
          label='password'
          placeholder='password'
          type='password'
          name='password'
          borderRadius='rounded-md'
          defaultValue='plzletmein'
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
