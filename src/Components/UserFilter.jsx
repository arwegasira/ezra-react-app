import { Formik, Form } from 'formik'
import FormIkInput from './FormIk/FormikInput'
import FormIkSelect from './FormIk/FormIkSelect'
import { useLoaderData, useNavigate } from 'react-router-dom'

const UserFilter = () => {
  const navigate = useNavigate()
  const onSubmit = (values, actions) => {
    const url = `/users?name=${values.name}&email=${values.email}&role=${values.role}`
    navigate(url)
  }

  const {
    params: { name, email, role },
  } = useLoaderData()

  return (
    <section className='mt-10 md:flex md:justify-center'>
      <Formik
        initialValues={{
          name: name ? name : '',
          email: email ? email : '',
          role: role ? role : '',
        }}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className='bg-blue-50 py-8 px-4 rounded-lg shadow-sm w-full md:w-[90%] md:max-w-[70rem]'>
            <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              <FormIkInput
                label='Name'
                size='input-sm'
                type='text'
                name='name'
                id='name'
              ></FormIkInput>
              <FormIkInput
                label='Email'
                size='input-sm'
                type='text'
                name='email'
                id='email'
              ></FormIkInput>
              <FormIkSelect
                label='Role'
                size='select-sm'
                name='role'
                id='role'
                options={['', 'Admin', 'user']}
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
                onClick={() => navigate('/users')}
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
export default UserFilter
