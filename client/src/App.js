import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from './pages/Saved';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Search} />
      <Route exact path='/saved' component={Saved} />
      <Route exact path='/search' component={Search} />
    </Router>
  );
}

export default App;
