import FormInput from './FormInput'
import FormSelect from './FormSelect'
import EditDialogTitle from './EditDialogTitle'
import { useDispatch } from 'react-redux'
import { Form } from 'react-router-dom'
import { closeEditDialog } from '../feature/EditDialog/editDialog'
import { useLoaderData } from 'react-router-dom'
import { dateFormat, dateFormatYearMonthDay } from '../utils'
const EditAccommodation = () => {
  const {
    client: { activeAccommodation },
  } = useLoaderData()
  const {
    startDate,
    endDate,
    unitPrice,
    roomDetails: { name: roomName },
  } = activeAccommodation[0]

  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
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
