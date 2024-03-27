import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showErrorAlert: false,
  errorMsg: '',
}

const errorAlertSlice = createSlice({
  name: 'errorAlert',
  initialState,
  reducers: {
    showAlert: (state, action) => {
      state.showErrorAlert = true
      state.errorMsg = action.payload.msg
      // setTimeout(() => {
      //   state.showAlert = false
      // }, 5000)
    },
    removeAlert: (state) => {
      setTimeout(() => {
        state.showAlert = false
      }, 5000)
    },
  },
})

export const { showAlert, removeAlert } = errorAlertSlice.actions
export default errorAlertSlice.reducer
