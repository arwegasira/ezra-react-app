import { useSelector, useDispatch } from 'react-redux'
import { redirect } from 'react-router-dom'
export const loader = (store) => async () => {
  const { user } = store.getState()

  if (!user.user) {
    return redirect('/login')
  } else {
    return redirect('/home')
  }

  return null
}
const Landing = () => {
  return <></>
}
export default Landing
