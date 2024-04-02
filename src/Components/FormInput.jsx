const FormInput = ({
  label,
  size,
  type,
  placeholder,
  name,
  defaultValue,
  borderRadius,
  disabled,
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
        disabled={disabled}
      />
    </label>
  )
}
export default FormInput
