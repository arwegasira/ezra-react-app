import { useLoaderData } from 'react-router-dom'
import Client from './Client'
const ClientsContainer = () => {
  const { clients } = useLoaderData()

  return (
    <section className='my-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {clients.map((client) => {
        return <Client key={client._id} {...client}></Client>
      })}
    </section>
  )
}
export default ClientsContainer
