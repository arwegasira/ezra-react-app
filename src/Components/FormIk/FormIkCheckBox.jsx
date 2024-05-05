import { useField } from 'formik'
const FormIkCheckBox = ({ label, size, borderRadius, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className='form-control items-center'>
      <label htmlFor={props.id || props.name} className='label cursor-pointer'>
        <span className='label-text capitalize'>{label}</span>
      </label>
      <input
        {...props}
        {...field}
        className={`checkbox checkbox-primary ${size} ${
          meta.touched && meta.error ? 'border-red-300' : ''
        }`}
      />
      {meta.touched && meta.error && (
        <div className='text-sm text-red-300 italic'>{meta.error}</div>
      )}
    </div>
  )
}
export default FormIkCheckBox
