import { Formik, Form } from 'formik'
import FormIkInput from '../Components/FormIk/FormikInput'
import { customFetch, regFormValidation } from '../utils'
import FormIkSelect from './FormIk/FormIkSelect'
import { toast } from 'react-toastify'
const onSubmit = async (values, actions) => {
  try {
    const response = await customFetch.post('/client/addclient', values)
    toast.success('Client added successfully!')
    actions.resetForm()
  } catch (error) {
    const msg = error?.response?.data || 'Something went wrong'
    toast.error(msg)
  }
}
const ClientRegForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        middleName: '',
        gender: '',
        company: '',
        profesional: '',
        nationality: '',
        idNumber: '',
        phoneNumber: '',
        dob: '',
        email: '',
        country: '',
        city: '',
        state: '',
      }}
      validationSchema={regFormValidation}
      onSubmit={onSubmit}
    >
      {(isSubmitting, handleSubmit) => (
        <Form className='w-[90%] max-w-[70rem] px-6 py-8 bg-gray-100 rounded-md shadow-sm'>
          <div className='grid gap-2 md:grid-cols-2 lg:grid-cols-3'>
            <FormIkInput
              label='First Name'
              name='firstName'
              id='firstName'
              type='text'
              size='input-md'
            ></FormIkInput>
            <FormIkInput
              label='Last Name'
              name='lastName'
              id='lastName'
              type='text'
              size='input-md'
            ></FormIkInput>
            <FormIkInput
              label='Middle Name'
              name='middleName'
              id='middleName'
              type='text'
              size='input-md'
            ></FormIkInput>
            <FormIkSelect
              name='gender'
              id='gender'
              size='select-md'
              label='Gender'
              options={['', 'Male', 'Female']}
            ></FormIkSelect>
            <FormIkInput
              label='Company'
              name='company'
              id='company'
              type='text'
              size='input-md'
            ></FormIkInput>
            <FormIkInput
              label='Profession'
              name='profesional'
              id='profesional'
              type='text'
              size='input-md'
            ></FormIkInput>
            <FormIkInput
              label='Nationality'
              name='nationality'
              id='nationality'
              type='text'
              size='input-md'
            ></FormIkInput>
            <FormIkInput
              label='PS/ID #'
              name='idNumber'
              id='idNumber'
              type='text'
              size='input-md'
            ></FormIkInput>
            <FormIkInput
              label='Dob'
              name='dob'
              id='dob'
              type='date'
              size='input-md'
            ></FormIkInput>
            <FormIkInput
              label='Phone Number'
              name='phoneNumber'
              id='phoneNumber'
              type='text'
              size='input-md'
            ></FormIkInput>
            <FormIkInput
              label='Email'
              name='email'
              id='email'
              type='email'
              size='input-md'
            ></FormIkInput>
            <FormIkInput
              label='Country'
              name='country'
              id='country'
              type='text'
              size='input-md'
            ></FormIkInput>
            <FormIkInput
              label='City'
              name='city'
              id='city'
              type='text'
              size='input-md'
            ></FormIkInput>
            <FormIkInput
              label='State'
              name='state'
              id='state'
              type='text'
              size='input-md'
            ></FormIkInput>
          </div>
          <div className='lg:flex lg:justify-center mt-8'>
            <button
              type='submit'
              className='btn primary-btns w-full lg:w-[50%] outline-0 focus:outline-0'
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
export default ClientRegForm
