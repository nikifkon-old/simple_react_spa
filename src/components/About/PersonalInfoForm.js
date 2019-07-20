import React, { Fragment } from 'react'
import { Form, Field } from 'react-final-form' 
import { MenuItem } from '@material-ui/core'
import { FinalFormTextField, StyledForm } from '../../styles'

import Navigation from './Navigation'

const genderValues = [
  'Not Chosen', 'Men', 'Women'
]
// Second Form
const PersonalInfoForm = ({ data, handlePersonalInfoForm, decrementFormProgress, formProgress }) => {

    // Validate 
    const composeValidators = (...validators) => value =>
      validators.reduce((error, validator) => error || validator(value), undefined)

    const required = value => (value ? undefined : "Required")
    const isNumner = value => ( isNaN(value) ? "Must be number" : undefined )
    const numberOfDigits = number => value => {
      let stringValue = value.toString()
      return (
        stringValue.length === number ? undefined : `Must contain ${number} digits`
      )
    }
    return (
        <Fragment>
            <Form
              onSubmit={handlePersonalInfoForm} 
              render={({handleSubmit}) => (
                <StyledForm
                  width="400px"
                  onSubmit={handleSubmit}
                >
                  <Field 
                    validate={required}
                    multiline
                    type="text"
                    name="fullName"
                    label="Full Name"
                    margin="normal"
                    variant="filled"
                    defaultValue={data.fullName}
                    component={FinalFormTextField}/>

                  <Field 
                    select
                    validate={required}
                    margin="normal"
                    variant="filled"
                    label="Gender"
                    name="gender"
                    defaultValue={data.gender}
                    component={FinalFormTextField}
                  >
                    {genderValues.map(option => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Field>

                  <Field
                    validate={required}
                    multiline
                    type="text"
                    name="address"
                    label="Address"
                    margin="normal"
                    variant="filled"
                    defaultValue={data.address}
                    component={FinalFormTextField}
                  />
                  <Field
                    validate={composeValidators(required, isNumner, numberOfDigits(6))}
                    type="number"
                    name="postIndex"
                    label="Post Index"
                    margin="normal"
                    variant="filled"
                    defaultValue={data.postIndex}
                    component={FinalFormTextField}
                  />
                  <Field
                    validate={composeValidators(required, isNumner, numberOfDigits(12))}
                    type="number"
                    name="creditCard"
                    label="Credit Card"
                    margin="normal"
                    variant="filled"
                    defaultValue={data.creditCard}
                    component={FinalFormTextField}
                  />
                  <Navigation 
                    decrementFormProgress={decrementFormProgress} 
                    formProgress={formProgress}
                  />
                </StyledForm>
              )}
            />
        </Fragment>
    )
}

export default PersonalInfoForm
