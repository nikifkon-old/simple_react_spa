import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Media from 'react-media'
import { GlobalStyle, MultiTheme } from './styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import configureStore from './redux/configureStore'

import Home from './routes/Home'
import About from './routes/About'

import Header from './components/Header/'
import Footer from './components/Footer/'
import Error404 from './components/Error404/'

const store = configureStore({})

const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <MuiThemeProvider theme={MultiTheme}>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About}/>
          {/*<Route path="/about/JoinUs" component={JoinUs}/>*/}
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
      </Provider>
    </Fragment>
  );
}

export default App;
