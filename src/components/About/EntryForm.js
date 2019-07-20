import React, { Fragment } from 'react'
import { Form, Field } from 'react-final-form' 
import { FinalFormTextField, StyledForm } from '../../styles'

import Navigation from './Navigation'

// First Form
const EntryForm = ({ data, handleEntryForm, decrementFormProgress, formProgress }) => {
    
    // Validate
    const composeValidators = (...validators) => value =>
      validators.reduce((error, validator) => error || validator(value), undefined)

    const required = value => ( value ? undefined : "Required" )
    const isNumner = value => ( isNaN(value) ? "Must be number" : undefined )
    const email = value => ( value.indexOf("@") !== -1 ? undefined : "Email must contain `@`" )
    const tel = value => { let stringValue = value.toString()
      return (
        stringValue.length === 12 & stringValue[0] === "+" ? undefined 
        : "Phone number must start with + and contain 11 digits"
      )
    }

    return (
        <Fragment>
          <Form
            onSubmit={handleEntryForm}
            render={({handleSubmit}) => (
              <StyledForm
                width="400px"
                onSubmit={handleSubmit}
              >
                <Field 
                  validate={required}
                  type="text"
                  name="nickname"
                  label="Nickname"
                  margin="normal"
                  variant="filled"
                  defaultValue={data.nickname}
                  component={FinalFormTextField}/>
                <Field 
                  validate={composeValidators(required, email)}
                  type="email"
                  name="email"
                  label="Email"
                  margin="normal"
                  variant="filled"
                  defaultValue={data.email}
                  component={FinalFormTextField}/>
                <Field
                  validate={composeValidators(required, isNumner, tel)}
                  type="tel"
                  name="tel"
                  label="Telephone"
                  margin="normal"
                  variant="filled"
                  defaultValue={data.tel}
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

export default EntryForm
