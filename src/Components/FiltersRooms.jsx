import { Formik, Form } from 'formik'
import FormIkInput from './FormIk/FormikInput'
import FormIkSelect from './FormIk/FormIkSelect'
import { useLoaderData } from 'react-router-dom'
const FiltersRooms = () => {
  const {
    params: { name, roomType, status },
  } = useLoaderData()
  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <section className='mt-10 md:flex md:justify-center'>
      <Formik
        initialValues={{
          name: name ? name : '',
          roomType: roomType ? roomType : '',
          status: status ? status : '',
        }}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className='bg-blue-50 py-8 px-4 rounded-lg shadow-sm w-full md:w-[90%] md:max-w-[70rem]'>
            <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              <FormIkInput
                label='Room'
                size='input-sm'
                type='text'
                name='name'
                id='name'
              ></FormIkInput>
              <FormIkSelect
                label='Type'
                size='select-sm'
                name='roomType'
                id='roomType'
                options={['', 'Single', 'Double']}
              ></FormIkSelect>
              <FormIkSelect
                label='Status'
                size='select-sm'
                name='status'
                id='status'
                options={['', 'Available', 'Occupied']}
              ></FormIkSelect>
            </div>
            <div className='mt-4 gap-4 grid grid-cols-1 md:grid-cols-2'>
              <button
                type='submit'
                className='btn primary-btns btn-sm w-full rounded-lg'
              >
                Apply Filters
              </button>
              <button
                type='button'
                className='btn secondary-btns btn-sm w-full rounded-lg'
              >
                Clear
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  )
}
export default FiltersRooms
