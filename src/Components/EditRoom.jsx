import { useSelector, useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import EditDialogTitle from './EditDialogTitle'
import FormIkInput from './FormIk/FormikInput'
import FormIkSelect from './FormIk/FormIkSelect'
import { customFetch, roomTypes } from '../utils'
import { closeEditDialog } from '../feature/EditDialog/editDialog'
import { toast } from 'react-toastify'
import { showAlert } from '../feature/ErrorAlert/ErrorAlert'
import { useLocation, useNavigate } from 'react-router-dom'
const EditRoom = () => {
  const dispatch = useDispatch()
  const { name, roomType, price } = useSelector((store) => store.editRoom)
  const onSubmit = async (values) => {
    console.log(values)
  }
  return (
    <section>
      <Formik
        initialValues={{
          name: name,
          roomType: roomType,
          price: price,
        }}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <EditDialogTitle title='Edit Room'></EditDialogTitle>
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
export default EditRoom
