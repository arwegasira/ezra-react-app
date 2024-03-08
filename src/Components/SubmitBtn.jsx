import { useNavigation } from 'react-router-dom'
const SubmitBtn = ({ text, size, borderRadius }) => {
  const navigation = useNavigation()
  const submitting = navigation.state === 'submitting'

  return (
    <>
      {submitting ? (
        <button
          className={`btn btn-block primary-btns ${size} ${borderRadius}`}
          disabled={submitting}
        >
          <span className='loading loading-spinner '></span>
          Submitting
        </button>
      ) : (
        <button
          className={`btn btn-block primary-btns ${size} ${borderRadius}`}
        >
          {text}
        </button>
      )}
    </>
  )
}
export default SubmitBtn
