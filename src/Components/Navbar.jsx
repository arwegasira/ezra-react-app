import { VscThreeBars } from 'react-icons/vsc'
import { AiOutlineClose } from 'react-icons/ai'
import Navlinks from './Navlinks'
import { useState } from 'react'
import { logout } from '../feature/user/userSlice'
import { customFetch } from '../utils'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const toggleNav = () => {
    setIsOpen(!isOpen)
  }
  const handleLogOut = async () => {
    try {
      await customFetch.delete('/auth/logout')
      dispatch(logout())
      navigate('/login')
    } catch (error) {
      toast.error('Please try logging out again')
      return error
    }
  }
  return (
    <section className='p-4 relative z-10'>
      <button className='text-xl'>
        <VscThreeBars onClick={() => toggleNav()}></VscThreeBars>
      </button>
      <div
        className={`bg-slate-950 absolute top-0 left-0 py-4 w-[15rem] h-[100svh] grid pb-10 transition-all duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-[-100%]'
        }`}
        style={{ gridTemplateRows: '4rem auto auto' }}
      >
        <div className='relative '>
          <button className='text-xl absolute right-5 text-slate-50'>
            <AiOutlineClose onClick={() => toggleNav()}></AiOutlineClose>
          </button>
        </div>

        {/* NavLinks */}
        <ul className=' flex flex-col gap-8 items-center'>
          <Navlinks toggleNav={toggleNav}></Navlinks>
        </ul>
        <div className='grid place-items-center'>
          <button
            className='btn btn-sm primary-btns w-[70%]'
            onClick={() => handleLogOut()}
          >
            Log out
          </button>
        </div>
      </div>
    </section>
  )
}
export default Navbar
