import React, { Fragment, useContext } from 'react'
import { Form, Field } from 'react-final-form' 
import { FinalFormTextField, StyledForm } from '../../styles'

import { AppContext } from '../Reducer/'
import Navigation from './Navigation'

// First Form
const EntryForm = () => {
    const { state, dispatch } = useContext(AppContext)
    const EntryFormHandler = (values) => {
      dispatch({
        type: "ENTRY",
        payload: {
          nickname: values.nickname,
          email: values.email,
          tel: values.tel,
        }
      })
    }
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
              onSubmit={EntryFormHandler}
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
                    defaultValue={state.nickname}
                    component={FinalFormTextField}/>
                  <Field 
                    validate={composeValidators(required, email)}
                    type="email"
                    name="email"
                    label="Email"
                    margin="normal"
                    variant="filled"
                    defaultValue={state.email}
                    component={FinalFormTextField}/>
                  <Field
                    validate={composeValidators(required, isNumner, tel)}
                    type="tel"
                    name="tel"
                    label="Telephone"
                    margin="normal"
                    variant="filled"
                    defaultValue={state.tel}
                    component={FinalFormTextField}
                  />
                  <Navigation />
                </StyledForm>
              )}
            />
        </Fragment>
    )
}

export default EntryForm
