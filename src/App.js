// import logo from './logo.svg';

import React from 'react';
import { HashRouter as Router,Route } from 'react-router-dom';
import MainBoard from "./Main";
// import { BrowserRouter } from 'react-router-dom';
function App() {
  const baseurl = 'https://xn--299as6voca478bs7ip4ijkdpxj.kr'
  return (
    <Router basename={baseurl}>
        <Route exact path="/" component={MainBoard} />
          {/* <Route path="/login" component={Login} /> */}
          {/* <Route path="/Admin" component={Admin} /> */}
          </Router> 
  );
}

export default App;
