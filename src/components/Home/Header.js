import React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import styled from 'styled-components';
import { Label } from '../../styles'

const HeaderContainer = styled(Grid)`
    background: #51509c
`

const Header = () => {
    return (
        <HeaderContainer container item md={6} sm={12} justify='space-evenly'>
            <Link to="/"><Label color='white'>React</Label></Link>
            <Link to="about"><Label color='white'>About</Label></Link>
        </HeaderContainer>
    )
}

export default Header
