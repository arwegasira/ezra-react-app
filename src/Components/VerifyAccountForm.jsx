import { Formik, Form } from 'formik'
import FormIkInput from './FormIk/FormikInput'
import { verifyAccountValidation } from '../utils'
const VerifyAccountForm = () => {
  const onSubmit = (values, actions) => {
    console.log(values)
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
