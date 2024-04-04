import { Form } from 'react-router-dom'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import EditDialogTitle from './EditDialogTitle'
import { useSelector } from 'react-redux'
const AddAccommodation = () => {
  const { defaultRoomPrice } = useSelector((store) => store.roomState)
  return (
    <div>
      <EditDialogTitle title='Add Accommodation'></EditDialogTitle>
      <Form>
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
          <button type='button' className='btn secondary-btns md:w-[30%]'>
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
