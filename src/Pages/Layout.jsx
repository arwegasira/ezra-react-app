import { Outlet } from 'react-router-dom'
import { Navbar } from '../Components'
const Layout = () => {
  return (
    <>
      <Navbar></Navbar>
      <section className='align-element'>
        <Outlet></Outlet>
      </section>
    </>
  )
}
export default Layout
