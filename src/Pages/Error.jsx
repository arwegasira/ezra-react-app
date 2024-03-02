import { useRouteError, Link } from 'react-router-dom'
import pageNotFound from '../assets/pageNotFound.svg'
const Error = () => {
  const error = useRouteError()
  //if page not found
  if (error.status === 404) {
    return (
      <section className='align-element  my-10 flex flex-col gap-4 justify-center items-center h-[100svh]'>
        <h2 className='text-xl font-medium tracking-wide md:text-2xl'>
          Page Not Found ...
        </h2>
        <Link className='btn primary-btns btn-sm rounded-md sm:btn-wide'>
          Back Home
        </Link>
      </section>
    )
  }
  return (
    <section className='grid place-items-center h-[100vh]'>
      <h2 className='text-xl font-medium tracking-wide md:text-2xl'>
        Something went wrong ...
      </h2>
    </section>
  )
}
export default Error
