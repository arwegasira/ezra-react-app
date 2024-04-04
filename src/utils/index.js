import axios from 'axios'

export const customFetch = axios.create({
  baseURL: 'http://localhost:80/api/v1',
})

export const dateFormat = (date) => {
  return new Intl.DateTimeFormat('en-GB').format(new Date(date))
}

export const fetchAvailableRoom = async () => {
  try {
    const response = await customFetch.get('/rooms/availableRooms')
    return response
    return rooms
  } catch (error) {
    return error
  }
}
