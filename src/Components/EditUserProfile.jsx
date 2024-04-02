import { Form } from 'react-router-dom'
import FormInput from './FormInput'
import { useLoaderData, useNavigate } from 'react-router-dom'
import EditDialogTitle from './EditDialogTitle'
import { customFetch } from '../utils'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { closeEditDialog } from '../feature/EditDialog/editDialog'
import { showAlert, removeAlert } from '../feature/ErrorAlert/ErrorAlert'
const EditUserProfile = () => {
  const { client } = useLoaderData()
  const {
    firstName,
    lastName,
    middleName,
    idNumber,
    phoneNumber,
    email,
    profesional: profession,
    company,
    nationality,
    city,
    state,
    country,
    _id: clientId,
  } = client
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData(e.currentTarget)
    formData = Object.fromEntries(formData)

    try {
      const response = await customFetch.patch(
        `client/editclient/${clientId}`,
        formData
      )
      //dispatch close dialog
      dispatch(closeEditDialog())
      //reload
      navigate(`/singleClient/${clientId}`)
    } catch (error) {
      //dispatch show alert
      const msg = error?.response?.data?.msg || 'Something went wrong.'
      dispatch(showAlert({ msg }))
      //remove alert after 5seconds
      // dispatch(removeAlert())
    }
  }
  return (
    <>
      <EditDialogTitle title='Edit User Profile'></EditDialogTitle>
      <Form
        method='POST'
        className='mt-2'
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
          <FormInput
            label='ID/PC #'
            type='text'
            name='idNumber'
            size='input-sm'
            defaultValue={idNumber}
          ></FormInput>
          <FormInput
            label='First Name'
            type='text'
            name='firstName'
            size='input-sm'
            defaultValue={firstName}
          ></FormInput>
          <FormInput
            label='Middle Name'
            type='text'
            name='middleName'
            size='input-sm'
            defaultValue={middleName}
          ></FormInput>
          <FormInput
            label='Last Name'
            type='text'
            name='lastName'
            size='input-sm'
            defaultValue={lastName}
          ></FormInput>
          <FormInput
            label='Phone Number'
            type='text'
            name='phoneNumber'
            size='input-sm'
            defaultValue={phoneNumber}
          ></FormInput>
          <FormInput
            label='Email'
            type='email'
            name='email'
            size='input-sm'
            defaultValue={email}
          ></FormInput>
          <FormInput
            label='Profession'
            type='text'
            name='profesional'
            size='input-sm'
            defaultValue={profession}
          ></FormInput>
          <FormInput
            label='Company'
            type='text'
            name='company'
            size='input-sm'
            defaultValue={company}
          ></FormInput>
          <FormInput
            label='Nationality'
            type='text'
            name='nationality'
            size='input-sm'
            defaultValue={nationality}
          ></FormInput>
          <FormInput
            label='City'
            type='text'
            name='city'
            size='input-sm'
            defaultValue={city}
          ></FormInput>
          <FormInput
            label='State'
            type='text'
            name='state'
            size='input-sm'
            defaultValue={state}
          ></FormInput>
          <FormInput
            label='Country'
            type='text'
            name='country'
            size='input-sm'
            defaultValue={country}
          ></FormInput>
        </div>
        <div className='mt-6 flex flex-col gap-3 md:flex-row md:justify-center'>
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
    </>
  )
}

export default EditUserProfile
