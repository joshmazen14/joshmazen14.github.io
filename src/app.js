import React from 'preact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import Navbar from './navbar';

const App = (props) => (
  <Router>
    <Navbar/>
    <div class="site">
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  </Router>
);

export default App;