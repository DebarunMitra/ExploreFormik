import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError';

const RadioButton = (props) => {
  const {label, name, options, ...rest} = props;
  return (<div className='form-control'>
    <label>{label}</label>
    <Field as='radio' {...rest} >
      {
        ({field}) => {
          return options.map(option => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type='radio'
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label className='radio-label' htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            )
          })
        }
      }
    </Field>
    <ErrorMessage name={name} component={TextError}/>
  </div>)
}

export default RadioButton
