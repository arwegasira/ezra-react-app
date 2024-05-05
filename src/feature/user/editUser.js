import { createSlice, current } from '@reduxjs/toolkit'
const initialState = {
  firstName: null,
  lastName: null,
  email: null,
  role: null,
}

const editUserSlice = createSlice({
  name: 'editUser',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.email = action.payload.email
      state.role = action.payload.role
    },
  },
})

export const { setCurrentUser } = editUserSlice.actions
export default editUserSlice.reducer
