import { useField } from 'formik'
const FormIkSelect = ({ label, size, borderRadius, options, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <label className='form-control'>
      <div className='label'>
        <span className='label-text'>{label}</span>
      </div>
      <select
        className={`select select-bordered ${size} ${borderRadius} ${
          meta.touched && meta.error ? 'border-red-300' : ''
        }`}
        {...props}
        {...field}
      >
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          )
        })}
      </select>
      {meta.touched && meta.error && (
        <div className='text-sm text-red-300 italic'>{meta.error}</div>
      )}
    </label>
  )
}
export default FormIkSelect
