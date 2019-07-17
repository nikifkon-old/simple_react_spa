import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import Media from 'react-media'
import { GlobalStyle, MultiTheme } from '../styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import { AppProvider } from './Reducer/'

import Home from './Home/'
import Header from './Header/'
import Footer from './Footer/'
import Error404 from './Error404/'
import About from './About/'

const App = () => {
  return (
    <Fragment>
      <AppProvider>
        <MuiThemeProvider theme={MultiTheme}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          {/*<Route path="/privacy-police" component={PrivacyPolice} />
          <Route path="/FAQ" component={FAQ} />
          <Route path="/dictionary" component={Dictionary} />
          <Route path="/cookie" component={Cookie} />*/}
          <Route component={Error404}/>  
        </Switch>
        <Media query="(min-width: 600px)">
          { matches => matches && <Footer />}
        </Media>
        <GlobalStyle />
      </MuiThemeProvider>
      </AppProvider>
      
    </Fragment>
  );
}

export default App;
