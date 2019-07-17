import React, { Fragment } from 'react'
import Media from 'react-media'

import DesktopMenu from './DesktopMenu/'
import MobileMenu from './MobileMenu/'

const Header = () => {
    return (
        <Fragment>
            <Media query="(max-width: 600px)">
                { matches => 
                    matches ? <MobileMenu />
                    : <DesktopMenu />
                }
            </Media>
        </Fragment>
    )
}

export default Header
