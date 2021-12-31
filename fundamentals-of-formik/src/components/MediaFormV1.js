import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const MediaFormV1 = () => {

    const initialValues = {
      name: '',
      email: '',
      channel: ''
    };

    const onSubmit = values => {
      console.log(values);
    };

    const validationSchema = Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid Email Format!').required('Required'),
      channel: Yup.string().required('Required')
    })

  // console.log(formik.values);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      >
      <div className='form-control'>
        <Form>
          <label htmlFor='name'>Name</label>
          <Field
            type='text'
            name='name'
            id='name'
          />
        <ErrorMessage name='name' />

          <label htmlFor='email'>Email</label>
          <Field
            type='email'
            name='email'
            id='email'
          />
        <ErrorMessage name='email' />

          <label htmlFor='channel'>Channel</label>
          <Field
            type='text'
            name='channel'
            id='channel'
          />

        <ErrorMessage name='channel' />

          <button type='submit'>Submit</button>
        </Form>
      </div>
    </Formik>
  )
}

export default MediaFormV1
