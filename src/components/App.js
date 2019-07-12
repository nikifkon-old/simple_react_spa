import React, { Fragment } from 'react';
import { Route } from 'react-router-dom'
import Home from './Home/'
import { GlobalStyle, MultiTheme } from '../styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'


const About = () => (<div>Coming Soon</div>)
const PrivacyPolice = () => (<div>Coming Soon</div>)
const FAQ = () => (<div>Coming Soon</div>)
const Dictionary = () => (<div>Coming Soon</div>)
const Cookie = () => (<div>Coming Soon</div>)

const App = () => {
  return (
    <Fragment>
      <MuiThemeProvider theme={MultiTheme}>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/privacy-police" component={PrivacyPolice} />
        <Route path="/FAQ" component={FAQ} />
        <Route path="/dictionary" component={Dictionary} />
        <Route path="/cookie" component={Cookie} />
        <GlobalStyle />
      </MuiThemeProvider>
    </Fragment>
  );
}

export default App;
