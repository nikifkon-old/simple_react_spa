import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router'
import { AboutInfoContainer, AboutFormContainer } from '../../containers'

const About = () => {
    return (
        <Fragment>
          <Switch>
            <Route path="/about" exact component={AboutInfoContainer}/>
            <Route path="/about/joinus" component={AboutFormContainer}/>
          </Switch>
        </Fragment>
    )
}

export default About