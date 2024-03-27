import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
  currentForm: null,
}

const editDialogSlice = createSlice({
  name: 'editDialog',
  initialState: initialValue,
  reducers: {
    openEditDialog: (state, action) => {
      state.currentForm = action.payload.currentForm
      const editDialog = document.querySelector('.edit-dialog')
      editDialog.showModal()
    },
    closeEditDialog: (state, action) => {
      state.currentForm = null
      const editDialog = document.querySelector('.edit-dialog')
      editDialog.close()
    },
  },
})

export default editDialogSlice.reducer
export const { openEditDialog, closeEditDialog } = editDialogSlice.actions
