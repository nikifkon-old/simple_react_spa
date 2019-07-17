import styled, { css, createGlobalStyle } from 'styled-components'
import { Grid, TextField, } from '@material-ui/core'
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
        margin-top: 60px
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
        PrivateNotchedOutline: {
            root: {
                borderRadius: "20px",
            }
        },   
        MuiOutlinedInput: {
            root: {                
                margin: '1rem 0',
                background: "#eee",
                borderRadius: "20px",
                width: "270px",
            },
            input: {
                borderRadius: "20px",
            }
        },
        MuiFilledInput: {
            root: {
                margin: ".5rem",
                width: "100%"
            }
        }
    }
})
export const Label = styled.p`
    color: ${props => props.color || '#000'}
    font-size: ${props => props.fontSize || '1rem'}
    margin: 0 1rem
    text-align: center
    font-weight: ${props => props.fontWeight || 'normal'}
    ${props => props.color === 'primary' && css`
        color: ${primary}
    `}
`
export const FinalFormTextField = ({input, value, onChange, variant, placeholder, meta, ...rest}) => {
    return (
    <TextField
      value={value}
      onChange={onChange}
      variant={variant}
      fullWidth
      placeholder={placeholder}
      helperText={meta.touched ? meta.error : undefined}
      error={meta.error && meta.touched}
      {...input}
      {...rest}
    />
)}

export const StyledForm = styled.form`
  flex: 1
  position: relative
  flex-direction: column
  justify-content: flex-start
  align-items: center
  width: ${props => props.width && props.width}
`

export const HeaderContainer = styled(Grid)`
    position: fixed
    top: 0
    background: #51509c
    z-index: 999
    min-height: 60px
`
export const HeaderLabel = styled(Label)`
    margin: 1rem 4rem
`

export const SectionContainer = styled(Grid)`
    background: ${props => props.background || '#fff'}
`