import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'redux-starter-kit'
import { actions } from './AboutFormContainer.redux'

import EntryForm from '../../components/About/EntryForm'
import PersonalInfoForm from '../../components/About/PersonalInfoForm'
import CheckScreen from '../../components/About/CheckScreen'

import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import { Label } from '../../styles'

const AboutContainer = styled(Grid)`
  min-height: 100vh
`

class AboutFormContainer extends Component{

  handleEntryForm = (values) => {
    const { nickname, email, tel } = values
    this.props.EntryFormHandler(nickname, email, tel) 
  }

  handlePersonalInfoForm = (values) => {
    const { fullName, gender, address, postIndex, creditCard } = values
    this.props.PersonalInfoHandler(fullName, gender, address, postIndex, creditCard) 
  }

  decrementFormProgress = () => {
    this.props.DecrementFormProgress()
  }

  applyForm = () => {
    this.props.FormApply()
  }

  render() {
    const { data, formProgress, apply } = this.props
    const { handleEntryForm, handlePersonalInfoForm, decrementFormProgress, applyForm } = this

    const FormProgress = () => {
      const FormProps = {
        data: data,
        formProgress: formProgress,
        handleEntryForm: handleEntryForm,
        handlePersonalInfoForm: handlePersonalInfoForm,
        decrementFormProgress: decrementFormProgress,
      }

      switch(formProgress){
        case 0:
          return (
          <Fragment>
            <Label fontSize="2rem">Join Us</Label>
            <EntryForm {...FormProps} />
          </Fragment> )
        case 1:
          return <PersonalInfoForm {...FormProps}/>
        case 2:
          return <CheckScreen {...FormProps} applyForm={applyForm}/>
        case 3: 
          return <Label fontSize="2rem">Thanks you for join us</Label>
      }
    }

    return (
      <Fragment>
        <AboutContainer container direction="column" alignItems="center">
          <FormProgress />
        </AboutContainer>
      </Fragment>
    )
  }
}

const AboutFormSelector = createSelector(
  ["about.formData"]
)

const AboutFormProgressSelector = createSelector(
  ["about.formProgress"]
)

const AboutApplySelector = createSelector(
  ["about.apply"]
)
const mapStateToProps = state => ({
  data: AboutFormSelector(state),
  formProgress: AboutFormProgressSelector(state),
  apply: AboutApplySelector(state)
})

export default connect(
  mapStateToProps, 
  actions,
)(AboutFormContainer)