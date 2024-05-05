import { configureStore } from '@reduxjs/toolkit'
import userSlice from './feature/user/userSlice'
import clientSlice from './feature/clients/clientSlice'
import editDialogSlice from './feature/EditDialog/editDialog'
import errorAlertSlice from './feature/ErrorAlert/ErrorAlert'
import roomSlice from './feature/Room/room'
import editServiceSlice from './feature/Services/editServiceSlice'
import editUser from './feature/user/editUser'

export const store = configureStore({
  reducer: {
    user: userSlice,
    clientsState: clientSlice,
    editDialogState: editDialogSlice,
    errorAlertState: errorAlertSlice,
    roomState: roomSlice,
    editServiceState: editServiceSlice,
    editUserState: editUser,
  },
})
