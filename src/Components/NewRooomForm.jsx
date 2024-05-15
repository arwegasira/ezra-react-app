import { useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import EditDialogTitle from './EditDialogTitle'
import FormIkInput from './FormIk/FormikInput'
import FormIkSelect from './FormIk/FormIkSelect'
import { customFetch, roomTypes, roomValidation } from '../utils'
import { closeEditDialog } from '../feature/EditDialog/editDialog'
import { toast } from 'react-toastify'
import { showAlert } from '../feature/ErrorAlert/ErrorAlert'
import { useNavigate } from 'react-router-dom'

const NewRooomForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onSubmit = async (values) => {
    try {
      const response = await customFetch.post(`/rooms`, values)
      dispatch(closeEditDialog())
      navigate('/rooms')
      toast.success('Room added successfully!')
    } catch (error) {
      const msg = error?.response?.data || 'Something went wrong'
      dispatch(showAlert({ msg }))
    }
  }
  return (
    <section>
      <Formik
        initialValues={{
          name: '',
          roomType: '',
          price: '',
        }}
        validationSchema={roomValidation}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <EditDialogTitle title='New Room'></EditDialogTitle>
            <div className='mt-2 grid md:grid-cols-2 md:gap-2'>
              <FormIkInput
                label='Name'
                id='name'
                name='name'
                size='input-sm'
                type='text'
              ></FormIkInput>
              <FormIkSelect
                options={roomTypes}
                size='select-sm'
                label='Room Type'
                id='roomType'
                name='roomType'
              ></FormIkSelect>
              <FormIkInput
                label='Price'
                id='price'
                name='price'
                size='input-sm'
                type='number'
              ></FormIkInput>
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
export default NewRooomForm
