import { useLoaderData } from 'react-router-dom'
const RoomsList = () => {
  const { rooms } = useLoaderData()
  console.log(rooms)
  return <div>RoomsList</div>
}
export default RoomsList
