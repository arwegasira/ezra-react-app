import { useDispatch } from 'react-redux'
import { Form, useLoaderData, useNavigate } from 'react-router-dom'
import EditDialogTitle from './EditDialogTitle'
import { closeEditDialog } from '../feature/EditDialog/editDialog'
import { showAlert } from '../feature/ErrorAlert/ErrorAlert'
import FormInput from './FormInput'
import FormSelectMultiPurpose from './FormSelectMultiPurpose'
import { customFetch } from '../utils'
const EditService = () => {
  const {
    client: { _id: clientId },
  } = useLoaderData()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData(e.currentTarget)
    formData = Object.fromEntries(formData)
    // try {
    //   const response = await customFetch.post(
    //     `/client/addservice/${clientId}`,
    //     formData
    //   )
    //   dispatch(closeEditDialog())
    //   navigate(`/singleClient/${clientId}`)
    // } catch (error) {
    //   const msg = error?.response?.data.msg || 'Something went wrong'
    //   console.error(msg)
    //   dispatch(showAlert({ msg: msg }))
    // }
  }
  return (
    <div>
      <EditDialogTitle title='Edit Service'></EditDialogTitle>
      <Form method='POST' onSubmit={(e) => handleSubmit(e)}>
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 '>
          <FormSelectMultiPurpose
            label='Service'
            name='service'
            size='select-sm'
            options={[' ', 'Food and Beverages', 'Laundry']}
          ></FormSelectMultiPurpose>
          <FormInput
            label='Amount'
            type='number'
            name='price'
            size='input-sm'
          ></FormInput>
        </div>
        <div className='mt-8 flex flex-col gap-3 md:flex-row md:justify-center'>
          <button
            type='button'
            className='btn secondary-btns md:w-[30%]'
            onClick={() => dispatch(closeEditDialog())}
          >
            Cancel
          </button>
          <button type='submit' className='btn primary-btns md:w-[30%]'>
            Save
          </button>
        </div>
      </Form>
    </div>
  )
}
export default EditService
