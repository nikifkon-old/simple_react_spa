import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderContainer, HeaderLabel } from '../../../styles'

const DesktopMenu = () => {
    return (
        <HeaderContainer container item md={12} sm={12} justify='flex-start'>
            <Link to="/">
                <HeaderLabel color='white'>React</HeaderLabel>
            </Link>
            <Link to="about">
                <HeaderLabel color='white'>About</HeaderLabel>
            </Link>
        </HeaderContainer>
    )
}

export default DesktopMenu