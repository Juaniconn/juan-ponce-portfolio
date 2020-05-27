import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider, Box, makeStyles } from '@material-ui/core';
import Layout from './components/layout/layout';
import Main from './components/pages/main'
import Resume from './components/pages/resume'
import Works from './components/pages/works'
import Contact from './components/pages/contact'

const useStyles = makeStyles((theme) => ({
  app: {
      margin: "0 20%",
      [theme.breakpoints.down("md")]: {
          margin: "0 2rem",
      }
  },
}));

const myTheme = createMuiTheme({
  typography: {
      fontFamily: "'Lato', sans-serif" 
  }
})

const App = () => {
  const classes = useStyles()
  return (
    <MuiThemeProvider theme={myTheme}>
      <Switch>
        <Layout>
          <Box className={classes.app}>
            <Route exact path="/" component={Main}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/works" component={Works}/>
            <Route path="/contact" component={Contact}/>
          </Box>
        </Layout>
      </Switch>
    </MuiThemeProvider>
  )
}

export default withRouter(App)
