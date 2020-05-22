import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Main from './components/pages/main'

const myTheme = createMuiTheme({
  typography: {
      fontFamily: "'Lato', sans-serif" 
  }
})

const App = () => {
  return (
    <MuiThemeProvider theme={myTheme}>
      <Switch>
        <Route exact path="/" component={Main}/>
      </Switch>
    </MuiThemeProvider>
  )
}

export default withRouter(App)
