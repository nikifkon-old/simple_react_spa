import styled, { css, createGlobalStyle } from 'styled-components'
import { Grid, TextField } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles';
import React from 'react'

export const primary = '#51509c'
export const GlobalStyle = createGlobalStyle`
    *{
        font-family: "Poppins", sans-serif
    }
    body {
        margin: 0
        padding: 0
    }
    a {
        text-decoration: none
    }
    @keyframes left_appear {
        0% {
            transform: translateX(-500px);
            opacity: 0;
        }
        100% {
            transform: translateX(0px);
            opacity: 1;
        }
    }
    @keyframes right_appear {
        0% {
            transform: translateX(500px);
            opacity: 0;
        }
        100% {
            transform: translateX(0px);
            opacity: 1;
        }
    }
`
export const MultiTheme = createMuiTheme( {
    overrides: {
        // Inputs
        MuiInputBase: {
            input: {
                borderRadius: "20px"
            }
        },
        MuiFormControl: {
            root:{
                margin: '1rem',
                background: "#eee",
                borderRadius: "20px",
                width: "300px",
            }
        },
        PrivateNotchedOutline: {
            root: {
                borderRadius: '20px'
            }
        },
        // Submit icon on Email form
        MuiIconButton: {
            root: {
                position: "absolute"
            }
        }
    }
})

export const Label = styled.p`
    color: ${props => props.color || '#000'}
    font-size: ${props => props.fontSize || '1rem'}
    margin-left: 1rem
    text-align: center
    font-weight: ${props => props.fontWeight || 'none'}
    ${props => props.color == 'primary' && css`
        color: ${primary}
    `}
`
export const FinalFormTextField = ({input, variant, placeholder, meta, ...rest}) => {
    return (
    <TextField
      variant={variant}
      placeholder={placeholder}
      helperText={meta.touched ? meta.error : undefined}
      error={meta.error && meta.touched}
      {...input}
      {...rest}
    />
)}
export const Button = styled.button`
    background: transparent
    padding: 3px
    color: palevioletred
    
    ${props => props.primary && css`
        background: palevioletred
        color: #fff
    `}
`

export const SectionContainer = styled(Grid)`
    background: ${props => props.background || '#fff'}
`