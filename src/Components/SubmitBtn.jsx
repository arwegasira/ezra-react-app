const SubmitBtn = ({ text, size, borderRadius }) => {
  return (
    <button className={`btn btn-block primary-btns ${size} ${borderRadius}`}>
      {text}
    </button>
  )
}
export default SubmitBtn
