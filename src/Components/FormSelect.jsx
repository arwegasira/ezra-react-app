const FormSelect = ({
  label,
  size,
  name,
  defaultValue,
  borderRadius,
  defaultSelectTitle,
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
        <option disabled selected>
          {defaultSelectTitle}
        </option>
      </select>
    </label>
  )
}
export default FormSelect
