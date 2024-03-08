import { Outlet, useNavigation } from 'react-router-dom'
import { Navbar, Loading } from '../Components'
const Layout = () => {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'
  return (
    <>
      <Navbar></Navbar>
      {isLoading ? (
        <Loading />
      ) : (
        <section className='align-element'>
          <Outlet></Outlet>
        </section>
      )}
    </>
  )
}
export default Layout
