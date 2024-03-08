import { configureStore } from '@reduxjs/toolkit'
import userSlice from './feature/user/userSlice'
import clientSlice from './feature/clients/clientSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    clientsState: clientSlice,
  },
})
