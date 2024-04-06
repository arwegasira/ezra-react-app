import FormInput from './FormInput'
import FormSelect from './FormSelect'
import EditDialogTitle from './EditDialogTitle'
import { useDispatch } from 'react-redux'
import { Form } from 'react-router-dom'
import { closeEditDialog } from '../feature/EditDialog/editDialog'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { customFetch, dateFormat, dateFormatYearMonthDay } from '../utils'
import { showAlert } from '../feature/ErrorAlert/ErrorAlert'
const EditAccommodation = () => {
  const {
    client: { activeAccommodation, _id: clientId },
  } = useLoaderData()
  const {
    startDate,
    endDate,
    unitPrice,
    roomDetails: { name: roomName },
  } = activeAccommodation[0]

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
        '/client/editaccommodation',
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
      <EditDialogTitle title='Edit Accommodation'></EditDialogTitle>
      <Form method='POST' onSubmit={(e) => handleSubmit(e)}>
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
          <FormInput
            label='Start Date'
            type='date'
            name='startDate'
            size='input-sm'
            defaultValue={dateFormatYearMonthDay(startDate)}
          ></FormInput>
          <FormInput
            label='End Date'
            type='date'
            name='endDate'
            size='input-sm'
            defaultValue={dateFormatYearMonthDay(endDate)}
          ></FormInput>
          <FormSelect
            label='Choose Room'
            name='roomName'
            size='select-sm'
            defaultValue={roomName}
          ></FormSelect>
          <FormInput
            label='Unit Price'
            type='number'
            name='unitPrice'
            size='input-sm'
            disabled={true}
            defaultValue={unitPrice}
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
export default EditAccommodation
