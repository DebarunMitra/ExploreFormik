import React from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik'
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
      },
      phoneNumbers: ['', ''],
      otherNumbers: [''],
    };

    const onSubmit = values => {
      console.log(values);
    };

    const validationSchema = Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid Email Format!').required('Required'),
      channel: Yup.string().required('Required'),
      // description: Yup.string().required('Required'),
      origin: Yup.string().required('Required'),
      otherChannels: Yup.object().shape({
        youtube: Yup.string().required('Required'),
        instagram: Yup.string().required('Required')
      }),
      phoneNumbers: Yup.array().of(Yup.number().required('Required'))
    })

    const validateDescription = value => {
      let error;
      if(!value) {
        error = 'Required'
      }
      return error;
    }

  // console.log(formik.values);
  {/* validationOnChange={false} */}
    {/* validateOnBlur={false} */}
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      // validateOnMount
      >
      {formik=>{
        return (
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
              validate={validateDescription}
            />
          <ErrorMessage name='description' component={TextError} />
          </div>
          <div className='form-control'>
            <label htmlFor='origin'>Channel Origin</label>
            <FastField
              name='origin'
            >
            {props=>{
              const {field, form, meta} = props;
              console.log('Origin');
              return (
                <div>
                  <input type='text' id='origin' {...field} />
                  {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
                </div>
              )
            }}
          </FastField>
        </div>
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
          <div className='form-control'>
            <label htmlFor='phoneNumbers'>Phone Numbers</label>
            <Field
              type='text'
              name='phoneNumbers[0]'
              id='primaryPhoneNumber'
              placeholder= 'Primary Number'
            />
          <ErrorMessage name='phoneNumbers[0]' component={TextError} />
            <Field
              type='text'
              name='phoneNumbers[1]'
              id='secondaryPhoneNumber'
              placeholder= 'Secondary Number'
            />
            <ErrorMessage name='phoneNumbers[1]' component={TextError} />
          </div>
          <div className='form-control'>
            <label htmlFor='otherNumbers'>Other Numbers</label>
            <FieldArray name='otherNumbers'>
              {fieldsArrayProps=>{
                const {push, remove, form} = fieldsArrayProps;
                const {values} = form;
                const {otherNumbers} = values;
                return (
                  <div>
                    {
                      otherNumbers.map((otherNumber, index) => (
                        <div key={index}>
                          <Field
                            name={`otherNumbers[${index}]`}
                            placeholder='Add Other Numbers'
                          />
                        {
                          index>0 && <button type='button' onClick={() => remove(index)}> - </button>
                        }
                          <button type='button' onClick={() => push('')}> + </button>
                        </div>
                      ))
                    }
                  </div>
                );
              }}
            </FieldArray>
          </div>
            <button type='submit' disabled={!(formik.dirty && formik.isValid)}>Submit</button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default MediaFormV1
