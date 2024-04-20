import { useLoaderData } from 'react-router-dom'
import UnpaidServiceSingle from './UnpaidServiceSingle'
const UnpaidServices = () => {
  const {
    client: { unpaidServices, _id: clientId },
  } = useLoaderData()

  return (
    <article className='mt-8'>
      {unpaidServices.map((unpaidService) => {
        const { service, total, serviceId } = unpaidService
        return (
          <UnpaidServiceSingle
            service={service}
            total={total}
            serviceId={serviceId}
            clientId={clientId}
            key={serviceId}
          ></UnpaidServiceSingle>
        )
      })}
    </article>
  )
}
export default UnpaidServices
