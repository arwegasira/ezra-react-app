import { Formik, Form } from 'formik'
import FormIkInput from './FormIk/FormikInput'
import FormIkSelect from './FormIk/FormIkSelect'
import { customFetch, newUserValidation, userRoles } from '../utils'
import EditDialogTitle from './EditDialogTitle'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { closeEditDialog } from '../feature/EditDialog/editDialog'
import { useNavigate } from 'react-router-dom'
import { showAlert } from '../feature/ErrorAlert/ErrorAlert'
const NewUserForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onSubmit = async (values, actions) => {
    try {
      const response = await customFetch.post('auth/register', values)
      dispatch(closeEditDialog())
      toast.success('User added successfully!')
      navigate('/users')
      actions.resetForm()
    } catch (error) {
      const msg = error?.response?.data || 'Something went wrong'
      dispatch(showAlert({ msg }))
    }
  }
  return (
    <section>
      <Formik
        initialValues={{ email: '', firstName: '', lastName: '', role: '' }}
        onSubmit={onSubmit}
        validationSchema={newUserValidation}
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
