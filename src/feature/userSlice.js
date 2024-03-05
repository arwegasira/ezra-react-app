import { createSlice } from '@reduxjs/toolkit'

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user')) || null
}

const initialState = {
  user: getUserFromLocalStorage(),
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      const user = action.payload
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
    logout: (state, action) => {
      state.user = null
      localStorage.removeItem('user')
      // add toast
    },
  },
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer
