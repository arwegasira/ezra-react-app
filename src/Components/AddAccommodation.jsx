import { Form } from 'react-router-dom'
import FormInput from './FormInput'
const AddAccommodation = () => {
  return (
    <div>
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
        </div>
        <div className='mt-6 flex flex-col gap-3 md:flex-row md:justify-center'>
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
