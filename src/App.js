// import logo from './logo.svg';

import React from 'react';
import { HashRouter as Router,Route } from 'react-router-dom';
import MainBoard from "./Main";
// import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <Router>
        <Route exact path="/" component={MainBoard} />
          {/* <Route path="/login" component={Login} /> */}
          {/* <Route path="/Admin" component={Admin} /> */}
          </Router> 
  );
}

export default App;
