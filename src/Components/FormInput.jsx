const FormInput = ({
  label,
  size,
  type,
  placeholder,
  name,
  defaultValue,
  borderRadius,
}) => {
  return (
    <label className='form-control '>
      <div className='label'>
        <span className='label-text capitalize'>{label}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size} ${borderRadius}`}
      />
    </label>
  )
}
export default FormInput
