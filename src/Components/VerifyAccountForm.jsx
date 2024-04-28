import { Formik, Form } from 'formik'
import FormIkInput from './FormIk/FormikInput'
import { customFetch, verifyAccountValidation } from '../utils'
import { useNavigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
const VerifyAccountForm = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const onSubmit = async (values, actions) => {
    const search = new URLSearchParams(location.search)
    values.email = search.get('user')
    values.verficationToken = search.get('token')
    console.log(values)
    try {
      await customFetch.post('auth/verify-Account', values)
      toast.success('Successfully verified...')
      navigate('/login')
    } catch (error) {
      const msg = error?.response?.data || 'Something went wrong'
      toast.error(msg)
    }
  }
  return (
    <Formik
      initialValues={{ newPassword: '', confirmPassword: '' }}
      validationSchema={verifyAccountValidation}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className='flex flex-col gap-4 bg-gray-50 p-4 pb-8 card rounded-md shadow-md sm:w-[25rem] px-4'>
          <div>
            <FormIkInput
              id='newPassword'
              name='newPassword'
              label='Password'
              size='input-md'
              type='password'
            ></FormIkInput>
            <FormIkInput
              id='confirmPassword'
              name='confirmPassword'
              label='Confirm Password'
              size='input-md'
              type='password'
            ></FormIkInput>
          </div>
          <div className='mt-4'>
            <button
              type='submit'
              disabled={isSubmitting}
              className='btn primary-btns w-full'
            >
              {isSubmitting ? 'Submitting' : 'Submit'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
export default VerifyAccountForm
