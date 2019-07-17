import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Grid } from '@material-ui/core';

import { Label, primary } from '../../styles'

const FooterContainer = styled(Grid)`
    background: ${primary}
`
const FooterLabel = styled(Label)`
    margin: 1.5rem 0.5rem
    color: #fff
`
const Footer = () => {
    return (
        <Fragment>
            <FooterContainer container direction="row" alignItems="center" justify="flex-end">
                <Link to="/dictionary"><FooterLabel>Dictionary</FooterLabel></Link>
                <Link to="/FAQ"><FooterLabel>FAQ</FooterLabel></Link>
                <Link to="/cookie"><FooterLabel>Cookies</FooterLabel></Link>
                <Link to="/privacy-police"><FooterLabel>Privacy Policy</FooterLabel></Link>
            </FooterContainer>
        </Fragment>
    )
}

export default Footer
