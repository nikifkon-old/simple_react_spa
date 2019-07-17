import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import styled, { css } from 'styled-components'
import { HeaderContainer, HeaderLabel } from '../../../styles'
import HamburgerIcon from '../../../assets/hamburger.png'

const HamburgerBox = styled.div`
    position: fixed
    top: -100vh
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    z-index: 998
    height: 100vh
    width: 100%
    background: #fff
    transition: all .4s ease-out 0s

    ${ props => props.isOpen
    // animate intro
    ? css`
        transform: translateY(100vh)
    `
    // animate out
    : css`
       transform: translateY(-100vh)
    `}
`
const MobileMenu = () => {
    const [ isOpen, setMenuOpen ] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!isOpen)
    }
    const closeMenu = () => {
        setMenuOpen(false)
    }

    const HamburgerLink = (props) => 
        <Link {...props} onClick={closeMenu} />

    return (
        <Fragment>
            <HeaderContainer container justify="space-between" alignItems="center">
                <Link onClick={closeMenu} to="/">
                    <HeaderLabel color="white">React</HeaderLabel>
                </Link>
                <IconButton onClick={toggleMenu}>
                    <img src={HamburgerIcon} width={24} alt="Menu"/>
                </IconButton>
            </HeaderContainer>
            <HamburgerBox isOpen={isOpen}>
                <HamburgerLink to="about">About</HamburgerLink>
                <HamburgerLink to="/dictionary">Dictionary</HamburgerLink>
                <HamburgerLink to="/FAQ">FAQ</HamburgerLink>
                <HamburgerLink to="/cookie">Cookies</HamburgerLink>
                <HamburgerLink to="/privacy-police">Privacy Policy</HamburgerLink>
            </HamburgerBox>
        </Fragment>
    )
}

export default MobileMenu
