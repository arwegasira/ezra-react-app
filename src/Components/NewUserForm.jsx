import { Formik, Form } from 'formik'
import FormIkInput from './FormIk/FormikInput'
import FormIkSelect from './FormIk/FormIkSelect'
import { userRoles } from '../utils'
import EditDialogTitle from './EditDialogTitle'
const NewUserForm = () => {
  const onSubmit = async (values, actions) => {
    console.log(values)
  }
  return (
    <section>
      <Formik
        initialValues={{ email: '', firstName: '', lastName: '', role: '' }}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <EditDialogTitle title='Add New User'></EditDialogTitle>
            <div className='mt-2 grid md:grid-cols-2 md:gap-2'>
              <FormIkInput
                label='First Name'
                id='firstName'
                name='firstName'
                size='input-sm'
                type='text'
              ></FormIkInput>
              <FormIkInput
                label='Last Name'
                id='lastName'
                name='lastName'
                size='input-sm'
                type='text'
              ></FormIkInput>
              <FormIkInput
                label='Email'
                id='email'
                name='email'
                size='input-sm'
                type='email'
              ></FormIkInput>
              <FormIkSelect
                options={userRoles}
                size='select-sm'
                label='Role'
                id='role'
                name='role'
              ></FormIkSelect>
            </div>
            <div className='mt-6 flex flex-col gap-3 md:flex-row md:justify-center'>
              <button
                type='button'
                className='btn secondary-btns w-full md:w-[30%]'
              >
                Cancel
              </button>
              <button
                type='submit'
                disabled={isSubmitting}
                className='btn primary-btns w-full md:w-[30%]'
              >
                {isSubmitting ? 'Submitting..' : 'Save'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  )
}
export default NewUserForm
