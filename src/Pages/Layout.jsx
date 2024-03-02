import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <section className='align-element'>
      <Outlet></Outlet>
    </section>
  )
}
export default Layout
