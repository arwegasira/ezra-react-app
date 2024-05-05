import { useSelector, useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import EditDialogTitle from './EditDialogTitle'
import FormIkInput from './FormIk/FormikInput'
import FormIkSelect from './FormIk/FormIkSelect'
import { userRoles } from '../utils'
import { closeEditDialog } from '../feature/EditDialog/editDialog'
import FormIkCheckBox from './FormIk/FormIkCheckBox'
import { newUserValidation } from '../utils'
const EditUserAccount = () => {
  const { firstName, lastName, role, email, isActive } = useSelector(
    (store) => store.editUserState
  )
  const dispatch = useDispatch()
  const onSubmit = async (values) => {
    values.isActive = values.isActive ? values.isActive : false
    console.log(values)
  }
  return (
    <section>
      <Formik
        initialValues={{
          email: email,
          firstName: firstName,
          lastName: lastName,
          role: role,
          isActive: isActive,
        }}
        onSubmit={onSubmit}
        validationSchema={newUserValidation}
      >
        {({ isSubmitting }) => (
          <Form>
            <EditDialogTitle title='Edit User'></EditDialogTitle>
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
              <div className='flex justify-start'>
                <FormIkCheckBox
                  label='Active'
                  type='checkbox'
                  size='checkbox-md'
                  id='isActive'
                  name='isActive'
                ></FormIkCheckBox>
              </div>
            </div>
            <div className='mt-6 flex flex-col gap-3 md:flex-row md:justify-center'>
              <button
                type='button'
                className='btn secondary-btns w-full md:w-[30%] outline-0 focus:outline-0'
                onClick={() => dispatch(closeEditDialog())}
              >
                Cancel
              </button>
              <button
                type='submit'
                disabled={isSubmitting}
                className='btn primary-btns w-full md:w-[30%] outline-0 focus:outline-0'
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
export default EditUserAccount
