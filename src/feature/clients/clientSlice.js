import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  clients: null,
}

const clientSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    updateClientsFromApi: (state, action) => {
      state.clients = action.payload
    },
  },
})

export const { updateClientsFromApi } = clientSlice.actions
export default clientSlice.reducer
