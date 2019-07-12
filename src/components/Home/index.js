import React, { Fragment } from 'react'

// import Header from './Header'
import FirstScreen from './FirstScreen'
import SecondScreen from './SecondScreen'
import AboutScreen from './AboutScreen';
import Footer from './Footer';

const Home = () => {
    return (
        <Fragment>
            <FirstScreen />
            <SecondScreen />
            <AboutScreen />
            <Footer />
        </Fragment>
    )
}

export default Home
