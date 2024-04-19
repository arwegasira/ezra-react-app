import axios from 'axios'

export const customFetch = axios.create({
  baseURL: 'localhost:80/api/v1',
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
