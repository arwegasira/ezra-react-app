const FormSelectMultiPurpose = ({
  label,
  size,
  name,
  defaultValue,
  borderRadius,
  options,
}) => {
  return (
    <label className='form-control'>
      <div className='label'>
        <span className='label-text'>{label}</span>
      </div>
      <select
        className={`select select-bordered ${size} ${borderRadius}`}
        name={name}
        defaultValue={defaultValue}
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
export default FormSelectMultiPurpose
