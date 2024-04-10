import { useDispatch } from 'react-redux'
import { Form } from 'react-router-dom'
import EditDialogTitle from './EditDialogTitle'
import { closeEditDialog } from '../feature/EditDialog/editDialog'
import FormInput from './FormInput'
const AddService = () => {
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <EditDialogTitle title='Add Service'></EditDialogTitle>
      <Form method='POST' onSubmit={(e) => handleSubmit(e)}>
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
          <FormInput
            label='Service'
            type='text'
            name='service'
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
export default AddService
