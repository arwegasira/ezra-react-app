import { Form } from 'react-router-dom'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import EditDialogTitle from './EditDialogTitle'
import { useSelector, useDispatch } from 'react-redux'
import { closeEditDialog } from '../feature/EditDialog/editDialog'
import { showAlert } from '../feature/ErrorAlert/ErrorAlert'
import { customFetch, dateFormat } from '../utils'
import { useLoaderData, useNavigate } from 'react-router-dom'
const AddAccommodation = () => {
  const { client } = useLoaderData()
  const { _id: clientId } = client
  const { defaultRoomPrice } = useSelector((store) => store.roomState)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData(e.currentTarget)
    formData = Object.fromEntries(formData)
    formData.startDate = dateFormat(formData.startDate)
    formData.endDate = dateFormat(formData.endDate)
    formData.clientId = clientId

    try {
      const response = await customFetch.post(
        '/client/addaccommodation',
        formData
      )
      dispatch(closeEditDialog())
      navigate(`/singleClient/${clientId}`)
    } catch (error) {
      const msg = error?.response?.data || 'Something went wrong'
      dispatch(showAlert({ msg }))
    }
  }
  return (
    <div>
      <EditDialogTitle title='Add Accommodation'></EditDialogTitle>
      <Form method='POST' onSubmit={(e) => handleSubmit(e)}>
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
          <FormInput
            label='Start Date'
            type='date'
            name='startDate'
            size='input-sm'
          ></FormInput>
          <FormInput
            label='End Date'
            type='date'
            name='endDate'
            size='input-sm'
          ></FormInput>
          <FormSelect
            label='Choose Room'
            name='roomName'
            size='select-sm'
            defaultSelectTitle='Choose Room'
          ></FormSelect>
          <FormInput
            label='Unit Price'
            type='number'
            name='unitPrice'
            size='input-sm'
            disabled={true}
            defaultValue={defaultRoomPrice}
          ></FormInput>
          <FormInput
            label='Override Price'
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
export default AddAccommodation
