import ErrorAlert from './ErrorAlert'
import { useSelector } from 'react-redux'
const EditDialog = ({ children }) => {
  const { showErrorAlert } = useSelector((store) => store.errorAlertState)

  return (
    <dialog className='edit-dialog w-[90%] max-w-[60rem] py-8 px-4 rounded-md'>
      {showErrorAlert && <ErrorAlert></ErrorAlert>}
      {children}
    </dialog>
  )
}
export default EditDialog
