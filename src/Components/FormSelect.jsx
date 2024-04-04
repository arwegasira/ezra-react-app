import { useRef, useState, useEffect } from 'react'
import { fetchAvailableRoom, fetchSelectedRoomPrice } from '../utils'
import { useDispatch } from 'react-redux'
import { showAlert } from '../feature/ErrorAlert/ErrorAlert'
import { setResetRoomPrice } from '../feature/Room/room'

const FormSelect = ({ label, size, name, defaultValue, borderRadius }) => {
  const [options, setOptions] = useState([])
  const select = useRef(null)
  const dispatch = useDispatch()
  const handleFocus = async () => {
    const response = await fetchAvailableRoom()
    if (response.status !== 200) {
      //show error alert
      const msg = response?.response?.data?.msg || 'Something went wrong'
      dispatch(showAlert({ msg }))
      //remove focus on select
      select.current.blur()
    } else {
      //update state
      let rooms = response?.data?.rooms
      rooms = rooms.map((room) => room.name)
      rooms.unshift(' ')
      setOptions(rooms)
    }
  }
  const handleChange = async (e) => {
    const price = await fetchSelectedRoomPrice(e.target.value)
    dispatch(setResetRoomPrice({ price }))
  }
  useEffect(() => {
    handleFocus()
  }, [])
  return (
    <label className='form-control'>
      <div className='label'>
        <span className='label-text'>{label}</span>
      </div>
      <select
        ref={select}
        className={`select select-bordered ${size} ${borderRadius}`}
        name={name}
        defaultValue={defaultValue}
        onFocus={async () => handleFocus()}
        onChange={(e) => handleChange(e)}
      >
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          )
        })}
      </select>
    </label>
  )
}
export default FormSelect
