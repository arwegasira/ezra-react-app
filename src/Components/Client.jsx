import { FaRegEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Client = ({
  _id,
  lastName,
  firstName,
  gender,
  nationality,
  idNumber,
  phoneNumber,
}) => {
  return (
    <article className='bg-base-200 rounded-lg shadow-md px-4 py-8 '>
      <div className='flex flex-col'>
        <header className='flex justify-between'>
          <strong>
            {firstName} {lastName}
          </strong>
          <Link to={`/singleClient/${_id}`} className='text-xl'>
            <FaRegEdit></FaRegEdit>
          </Link>
        </header>
        <span className='mt-1'>Gender: {gender}</span>
        <span className='mt-1'>Nationality: {nationality}</span>
        <span className='mt-1'>PC/ID #: {idNumber}</span>
        <span className='mt-1'>Phone Number: {phoneNumber}</span>
      </div>
    </article>
  )
}
export default Client
