import { FaHome } from 'react-icons/fa'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { GiSpookyHouse } from 'react-icons/gi'
import { IoSettingsSharp } from 'react-icons/io5'
import { FaServicestack } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
const links = [
  {
    id: 1,
    url: 'home',
    icon: <FaHome></FaHome>,
    text: 'Home',
  },
  {
    id: 2,
    url: 'rooms',
    icon: <GiSpookyHouse></GiSpookyHouse>,
    text: 'Rooms',
  },
  {
    id: 3,
    url: 'clients',
    icon: <HiOutlineUserGroup></HiOutlineUserGroup>,
    text: 'Clients',
  },
  {
    id: 4,
    url: 'services',
    icon: <FaServicestack></FaServicestack>,
    text: 'Services',
  },
  {
    id: 5,
    url: 'settings',
    icon: <IoSettingsSharp></IoSettingsSharp>,
    text: 'Settings',
  },
]
const Navlinks = ({ toggleNav }) => {
  return (
    <>
      {links.map((link) => {
        const { id, text, icon, url } = link
        return (
          <li key={link.id} className=''>
            <NavLink
              to={url}
              className='nav-links flex gap-3 text-slate-50 items-center py-1 px-5 hover:border-2 hover:border-amber-400 hover:rounded-xl'
              onClick={() => toggleNav()}
            >
              <span className='text-2xl'> {icon}</span>{' '}
              <span className='text-lg'>{text}</span>
            </NavLink>
          </li>
        )
      })}
    </>
  )
}
export default Navlinks
