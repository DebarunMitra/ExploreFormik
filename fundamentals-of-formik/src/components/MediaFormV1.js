import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError';

const MediaFormV1 = () => {

    const initialValues = {
      name: '',
      email: '',
      channel: '',
      description: '',
      origin: '',
      otherChannels: {
        youtube: '',
        instagram: ''
      }
    };

    const onSubmit = values => {
      console.log(values);
    };

    const validationSchema = Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid Email Format!').required('Required'),
      channel: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      origin: Yup.string().required('Required'),
      otherChannels: Yup.object().shape({
        youtube: Yup.string().required('Required'),
        instagram: Yup.string().required('Required')
      })
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
          <ErrorMessage name='name' component={TextError}/>
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <Field
            type='email'
            name='email'
            id='email'
          />
        <ErrorMessage name='email' component={TextError} />
        </div>
        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <Field
            type='text'
            name='channel'
            id='channel'
            placeholder='Favorite Channel Name'
          />
          <ErrorMessage name='channel' component={TextError} />
        </div>
        <div className='form-control'>
          <label htmlFor='description'>Description</label>
          <Field
            as='textarea'
            name='description'
            id='description'
            placeholder='Write Channel Description...'
          />
          <ErrorMessage name='description' component={TextError} />
        </div>
        <div className='form-control'>
          <label htmlFor='origin'>Channel Origin</label>
          <Field
            name='origin'
          >
          {props=>{
            const {field, form, meta} = props;
            return (
              <div>
                <input type='text' id='origin' {...field} />
                {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
              </div>
            )
          }}
        </Field>
        <div className='form-control'>
          <label htmlFor='otherChannels'>Other Channels</label>
          <Field
            type='text'
            name='otherChannels.youtube'
            id='youtube'
            placeholder= 'Youtube Channel Name'
          />
        <ErrorMessage name='otherChannels.youtube' component={TextError} />
          <Field
            type='text'
            name='otherChannels.instagram'
            id='instagram'
            placeholder= 'Instagram Channel Name'
          />
          <ErrorMessage name='otherChannels.instagram' component={TextError} />
        </div>
        </div>
          <button type='submit'>Submit</button>
        </Form>
    </Formik>
  )
}

export default MediaFormV1
