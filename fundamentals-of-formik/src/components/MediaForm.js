import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const MediaForm = () => {

    const initialValues = {
      name: '',
      email: '',
      channel: ''
    };

    const onSubmit = values => {
      console.log(values);
    };

    const validate = values => {
      let errors = {}

      if(!values.name){
        errors.name = 'Required'
      }

      if(!values.email){
        errors.email = 'Required'
      }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email format'
      }

      if(!values.channel){
        errors.channel = 'Required'
      }

      return errors;
    };

    const validationSchema = Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid Email Format!').required('Required'),
      channel: Yup.string().required('Required')
    })

  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate
    validationSchema
  });

  // console.log(formik.values);
  return (
    <div>
      <div className='form-control'>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {
              formik.touched.name && formik.errors.name?(
                <div className='error'>{formik.errors.name}</div>
            ):null
          }

          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {
            formik.touched.email && formik.errors.email?(
                <div className='error'>{formik.errors.email}</div>
            ):null
          }

          <label htmlFor='channel'>Channel</label>
          <input
            type='text'
            name='channel'
            id='channel'
            onChange={formik.handleChange}
            value={formik.values.channel}
            onBlur={formik.handleBlur}
          />
          {
            formik.touched.channel && formik.errors.channel?(
                <div className='error'>{formik.errors.channel}</div>
            ):null
          }

          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default MediaForm
