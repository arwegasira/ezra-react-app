const EditDialog = ({ children }) => {
  return (
    <dialog className='edit-dialog w-[90%] max-w-[60rem] py-8 px-4 rounded-md'>
      {children}
    </dialog>
  )
}
export default EditDialog
