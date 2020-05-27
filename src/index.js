import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core'
import ScrollToTop from './components/tools/scrollToTop'

ReactDOM.render(
  <Router>
    <CssBaseline/>
    <ScrollToTop />
    <App />
  </Router>,
  document.getElementById('root')
)
