import React, { Fragment, useState } from 'react'
import { Grid, IconButton, } from '@material-ui/core'
import { Label, FinalFormTextField, primary } from '../../styles'

import styled, { css } from 'styled-components';
import ArrowForward from '../../assets/arrow-right.svg'
import NotepadSVG from '../../assets/Notepad.svg'

import { Form, Field } from 'react-final-form'
import EmailDialog from './Dialog'


const FirstScreenContainer = styled(Grid)`
    background: ${primary}
    min-height: 100vh
`
const EmailForm = styled.form`
    position: relative
    animation: left_appear 0.5s ease-in-out 0s  alternate forwards
    ${css`
        .MuiFormControl-root .MuiFormHelperText-root{
            color: white
        }
    `}
`
const SubmitButton = styled(IconButton)`
    position: absolute !important
    right: 0
    top: 20%
`
const AnimateLabel = styled(Label)`
    animation: left_appear 0.5s ease-in-out 0s  alternate forwards
`
const NotepadImg = styled.img`
    width: 300px
    animation: right_appear 0.5s ease-in-out 0s  alternate forwards
`

const FirstScreen = () => {
    const [Email, setEmail] = useState()
    const [DialogOpen, setDialogOpen] = useState(false)

    const emailValidate = values => {
        const errors = {}
        if ( !values.email ) {
            errors.email = "Email is required"
        }
        return errors
    }

    const onSubmit = values => {
        setEmail(values["email"])
        setDialogOpen(true)
    }

    return (
        <Fragment>
            <EmailDialog email={Email} open={DialogOpen} setDialogOpen={setDialogOpen}/>
            <FirstScreenContainer container direction='row'>
                {/*<Header />*/}
                <Grid container
                 item lg={12} 
                 md={12} 
                 sm={12} 
                 justify='space-evenly' 
                 alignItems='center'>
                    <Grid item 
                    lg={6} 
                    md={6} 
                    sm={6} 
                    xs={12} 
                    container 
                    direction='column' 
                    justify='space-between' 
                    alignItems='center'>
                        <AnimateLabel fontSize='2rem' color='white'>
                            How to invest like a broker in 5 weeks
                        </AnimateLabel>
                        <Form 
                            onSubmit={onSubmit}
                            validate={emailValidate}
                            render={ ({handleSubmit}) => (
                                <EmailForm onSubmit={handleSubmit}>
                                    <Field 
                                      name="email"
                                      placeholder="Email me when it’s ready"
                                      variant="outlined"
                                      type="email"
                                      component={FinalFormTextField}/>
                                    <SubmitButton type="submit">
                                        <img src={ArrowForward} width={30} height={30} alt="go"/>
                                    </SubmitButton>
                                </EmailForm>
                            )}
                        />
                    </Grid>
                    <NotepadImg src={NotepadSVG} alt='noteepad'/>
                </Grid>
            </FirstScreenContainer>
        </Fragment>
    )
}

export default FirstScreen