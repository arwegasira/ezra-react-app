import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <div className='grid place-items-center h-[100svh]'>
      <h4 className='font-bold text-4xl'>There was an error...</h4>;
    </div>
  )
}
export default ErrorElement
