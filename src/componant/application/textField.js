import React from 'react'
import { ErrorMessage ,useField } from 'formik'
import './applyForm.css'


const TextField = ({label,...props}) => {
    const [field, meta] = useField(props)
   
  return (
 
 <div className='mb-2 applyinput '>
    <label htmlFor={field.name}>{label}</label>
    <input className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`} {...field} {...props}  />
    <ErrorMessage component='div' name={field.name} className='error' />
   </div>
 
  )
}

export default TextField