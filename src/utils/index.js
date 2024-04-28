import axios from 'axios'
import * as Yup from 'yup'
const environment = import.meta.env.VITE_ENVIRONMENT
export const customFetch = axios.create({
  baseURL:
    environment === 'Dev'
      ? 'http://localhost:80/api/v1'
      : 'https://ezra-back-end.onrender.com/api/v1',
})

export const dateFormat = (date) => {
  return new Intl.DateTimeFormat('en-GB').format(new Date(date))
}

export const dateFormatShortMonth = (date) => {
  const options = {
    month: 'short', // Abbreviated month name (e.g., "Apr")
    day: 'numeric', // Numeric day of the month (e.g., 6)
    year: '2-digit', // Two-digit year (e.g., 24)
  }
  const parts = new Intl.DateTimeFormat('en-US', options).formatToParts(
    new Date(date)
  )
  return `${parts[0].value} ${parts[2].value}th ${parts[4].value}`
}
export const dateFormatYearMonthDay = (date) => {
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }
  const parts = new Intl.DateTimeFormat('en-US', options).formatToParts(
    new Date(date)
  )
  return `${parts[4].value}-${parts[0].value}-${parts[2].value}`
}
export const fetchAvailableRoom = async () => {
  try {
    const response = await customFetch.get('/rooms/availableRooms')
    return response
  } catch (error) {
    return error
  }
}

export const fetchSelectedRoomPrice = async (roomName) => {
  try {
    const response = await customFetch.get(`/rooms/roomPrice/${roomName}`)
    return response?.data?.price || null
  } catch (error) {
    return null
  }
}

export const regFormValidation = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  gender: Yup.string().oneOf(['male', 'female']),
  phoneNumber: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  idNumber: Yup.string().required('Required'),
  nationality: Yup.string().required('Required'),
})
const passwordRule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
export const verifyAccountValidation = Yup.object({
  newPassword: Yup.string().required('Required').matches(passwordRule, {
    message:
      'Password must be at least 8 char long, contains at least one uppercase, at least one lowercase, and at least one digit',
  }),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Password must match')
    .required('Required'),
})
