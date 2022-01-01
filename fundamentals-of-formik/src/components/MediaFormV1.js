import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const MediaFormV1 = () => {

    const initialValues = {
      name: '',
      email: '',
      channel: '',
      descrption: ''
    };

    const onSubmit = values => {
      console.log(values);
    };

    const validationSchema = Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid Email Format!').required('Required'),
      channel: Yup.string().required('Required'),

    })

  // console.log(formik.values);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      >
        <Form>
          <div className='form-control'>
            <label htmlFor='name'>Name</label>
            <Field
              type='text'
              name='name'
              id='name'
            />
          <ErrorMessage name='name' />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <Field
            type='email'
            name='email'
            id='email'
          />
        <ErrorMessage name='email' />
        </div>
        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <Field
            type='text'
            name='channel'
            id='channel'
            placeholder='Favorite Channel Name'
          />
          <ErrorMessage name='channel' />
        </div>
        <div className='form-control'>
          <label htmlFor='description'>Description</label>
          <Field
            as='textarea'
            name='description'
            id='description'
            placeholder='Write Channel Description...'
          />
          <ErrorMessage name='description' />
        </div>
          <button type='submit'>Submit</button>
        </Form>
    </Formik>
  )
}

export default MediaFormV1
