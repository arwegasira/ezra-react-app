import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  defaultRoomPrice: null,
}

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setResetRoomPrice: (state, action) => {
      state.defaultRoomPrice = action.payload.price
    },
  },
})

export default roomSlice.reducer
export const { setResetRoomPrice } = roomSlice.actions
