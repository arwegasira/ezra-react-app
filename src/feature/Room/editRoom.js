import { createSlice } from '@reduxjs/toolkit'
import { roomTypes } from '../../utils'

const initialState = {
  name: '',
  roomId: '',
  roomType: '',
  price: '',
}

const editRoomSlice = createSlice({
  name: 'editRoom',
  initialState,
  reducers: {
    setCurrentRoom: (state, action) => {
      state.name = action.payload.name
      state.roomId = action.payload.roomId
      state.roomType = action.payload.roomType
      state.price = action.payload.price
    },
  },
})

export default editRoomSlice.reducer
export const { setCurrentRoom } = editRoomSlice.actions
