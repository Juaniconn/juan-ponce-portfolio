import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Layout from './components/layout/layout';
import Main from './components/pages/main'
import Resume from './components/pages/resume'
import Works from './components/pages/works'
import Contact from './components/pages/contact'

const myTheme = createMuiTheme({
  typography: {
      fontFamily: "'Lato', sans-serif" 
  }
})

const App = () => {
  return (
    <MuiThemeProvider theme={myTheme}>
      <Switch>
        <Layout>
          <Route exact path="/" component={Main}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/works" component={Works}/>
          <Route path="/contact" component={Contact}/>
        </Layout>
      </Switch>
    </MuiThemeProvider>
  )
}

export default withRouter(App)
