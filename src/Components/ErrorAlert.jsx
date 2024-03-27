import { useSelector } from 'react-redux'
const ErrorAlert = () => {
  const { errorMsg } = useSelector((store) => store.errorAlertState)
  return (
    <div className='bg-red-100 mb-4 py-2 '>
      <p className='text-center'>{errorMsg}</p>
    </div>
  )
}
export default ErrorAlert
