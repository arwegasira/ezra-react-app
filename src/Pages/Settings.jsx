import { nanoid } from 'nanoid'
import { FaUsers } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const settingsArray = [
  { text: 'Manage users', icon: <FaUsers></FaUsers>, to: '/users' },
]
const Settings = () => {
  return (
    <section className='mt-[7rem] '>
      {settingsArray.map((setting) => {
        const { text, icon, to } = setting
        return (
          <Link
            key={nanoid()}
            to={to}
            className='btn w-[15rem] flex flex-col gap-1 h-[5rem]'
          >
            <i className='text-3xl'>{icon}</i>
            <span className='text-xl'>{text}</span>
          </Link>
        )
      })}
    </section>
  )
}
export default Settings
