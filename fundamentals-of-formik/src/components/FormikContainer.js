import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const FormikContainer = (props) => {
  const options = [
    {key: 'Select', value:''},
    {key: 'option-2', value:'Banana'},
    {key: 'option-3', value:'Apple'},
    {key: 'option-4', value:'Mango'},
  ]
  const initialValues = {
    email: '',
    description: '',
    fevoriteFruit: ''
  }
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email Format!').required('Required'),
    description: Yup.string().required('Required'),
    fevoriteFruit: Yup.string().required('Required'),
  })
  const onSubmit = values => console.log('Form data', values);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      >
      {
        formik => (
          <Form>
          <FormikControl
            control='input'
            type='email'
            label='Email'
            name='email'
          />
          <FormikControl
            control='textarea'
            label='Description'
            name='description'
          />
          <FormikControl
            control='select'
            label='Fevorite Fruit'
            name='fevoriteFruit'
            options={options}
          />
        <button type='submit'>Submit</button>
      </Form>
    )}
    </Formik>
  )
}

export default FormikContainer
