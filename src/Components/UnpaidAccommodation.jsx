import { useLoaderData } from 'react-router-dom'
import UnpaidAccommodationSingle from './UnpaidAccommodationSingle'
const UnpaidAccommodation = () => {
  let {
    client: { unpaidAccommodation, _id: clientId },
  } = useLoaderData()
  unpaidAccommodation = unpaidAccommodation || []

  return (
    <article>
      {unpaidAccommodation.map((acc) => {
        const {
          startDate,
          endDate,
          unitPrice,
          totalCost,
          id,
          roomDetails: { name: roomName, roomType },
        } = acc
        return (
          <UnpaidAccommodationSingle
            key={id}
            startDate={startDate}
            endDate={endDate}
            unitPrice={unitPrice}
            totalCost={totalCost}
            roomName={roomName}
            roomType={roomType}
            id={id}
            clientId={clientId}
          ></UnpaidAccommodationSingle>
        )
      })}
    </article>
  )
}
export default UnpaidAccommodation
