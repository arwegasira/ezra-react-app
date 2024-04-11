import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  serviceId: null,
  service: null,
  amount: null,
}

const editServiceSlice = createSlice({
  name: 'editService',
  initialState,
  reducers: {
    setCurrentService: (state, action) => {
      state.serviceId = action.payload.serviceId
      state.amount = action.payload.amount
      state.service = action.payload.service
    },
  },
})

export default editServiceSlice.reducer
export const { setCurrentService } = editServiceSlice.actions
