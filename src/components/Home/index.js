import React, { Fragment } from 'react'

// import Header from './Header'
import FirstScreen from './FirstScreen'
import SecondScreen from './SecondScreen'
import AboutScreen from './AboutScreen';

const Home = () => {
    return (
        <Fragment>
            <FirstScreen />
            <SecondScreen />
            <AboutScreen />
        </Fragment>
    )
}

export default Home
