// import logo from './logo.svg';

import React from 'react';
import { HashRouter as Router,Route } from 'react-router-dom';
import MainBoard from "./Main";
import {url_path} from './config'

// import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <Router basename={url_path}>
        <Route exact path="/" component={MainBoard} />
          {/* <Route path="/login" component={Login} /> */}
          {/* <Route path="/Admin" component={Admin} /> */}
          </Router> 
  );
}

export default App;
