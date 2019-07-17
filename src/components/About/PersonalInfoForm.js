import React, { Fragment, useContext } from 'react'
import { Form, Field } from 'react-final-form' 
import { MenuItem } from '@material-ui/core'
import { FinalFormTextField, StyledForm } from '../../styles'

import { AppContext } from '../Reducer/'
import Navigation from './Navigation'

const genderValues = [
  'Not Chosen', 'Men', 'Women'
]
// Second Form
const PersonalInfoForm = () => {
    const { state, dispatch } = useContext(AppContext)

    const PersonalFormHandler = (values) => {
      dispatch({
        type: "PersonalInfo",
        payload: {
          fullName: values.fullName,
          gender: values.gender,
          address: values.address,
          postIndex: values.postIndex,
          creditCard: values.creditCard
        }
      })
    }
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
              onSubmit={PersonalFormHandler} 
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
                    defaultValue={state.fullName}
                    component={FinalFormTextField}/>

                  <Field 
                    select
                    validate={required}
                    margin="normal"
                    variant="filled"
                    label="Gender"
                    name="gender"
                    defaultValue={state.gender}
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
                    defaultValue={state.address}
                    component={FinalFormTextField}
                  />
                  <Field
                    validate={composeValidators(required, isNumner, numberOfDigits(6))}
                    type="number"
                    name="postIndex"
                    label="Post Index"
                    margin="normal"
                    variant="filled"
                    defaultValue={state.postIndex}
                    component={FinalFormTextField}
                  />
                  <Field
                    validate={composeValidators(required, isNumner, numberOfDigits(12))}
                    type="number"
                    name="creditCard"
                    label="Credit Card"
                    margin="normal"
                    variant="filled"
                    defaultValue={state.creditCard}
                    component={FinalFormTextField}
                  />
                  <Navigation />
                </StyledForm>
              )}
            />
        </Fragment>
    )
}

export default PersonalInfoForm
