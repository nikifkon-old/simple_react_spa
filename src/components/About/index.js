import React, { Fragment, useContext } from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import { Label } from '../../styles'

import { AppContext } from '../Reducer/'

import EntryForm from './EntryForm'
import PersonalInfoForm from './PersonalInfoForm'
import CheckScreen from './CheckScreen'

const AboutContainer = styled(Grid)`
  min-height: 100vh
`

const About = () => {
    const { state, dispatch } = useContext(AppContext)

    const FormProgress = () => {
      switch(state.formProgress){
        case 0:
          return <Fragment>
            <Label fontSize="2rem">Join Us</Label>
            <EntryForm />
          </Fragment>
        case 1:
          return <PersonalInfoForm />
        case 2:
          return <CheckScreen />
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

export default About
