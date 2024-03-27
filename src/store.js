import { configureStore } from '@reduxjs/toolkit'
import userSlice from './feature/user/userSlice'
import clientSlice from './feature/clients/clientSlice'
import editDialogSlice from './feature/EditDialog/editDialog'
import errorAlertSlice from './feature/ErrorAlert/ErrorAlert'

export const store = configureStore({
  reducer: {
    user: userSlice,
    clientsState: clientSlice,
    editDialogState: editDialogSlice,
    errorAlertState: errorAlertSlice,
  },
})
