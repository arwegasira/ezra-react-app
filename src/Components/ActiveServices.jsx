import SectionTitle from './SectionTitle'
import { useLoaderData } from 'react-router-dom'
import Service from './Service'
import { useDispatch } from 'react-redux'
import { openEditDialog } from '../feature/EditDialog/editDialog'
const ActiveServices = () => {
  const {
    client: { activeServices },
  } = useLoaderData()
  const dispatch = useDispatch()
  return (
    <article className='mt-10'>
      <div className='pb-4 border-b-2 flex justify-between'>
        <SectionTitle
          title='Active Services'
          textSize='text-2xl'
        ></SectionTitle>
        <button
          type='button'
          className='btn primary-btns btn-sm'
          onClick={() =>
            dispatch(openEditDialog({ currentForm: 'addService' }))
          }
        >
          New Service
        </button>
      </div>
      {activeServices.length &&
        activeServices.map((currentService) => {
          const { serviceId, service, total } = currentService
          return (
            <Service key={serviceId} service={service} total={total}></Service>
          )
        })}
    </article>
  )
}
export default ActiveServices
