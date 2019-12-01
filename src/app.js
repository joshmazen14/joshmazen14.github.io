import React from 'preact';
import { StaticRouter as Router, Route } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import Home from './home';
import Navbar from './navbar';
import About from './about';
import Resume from './resume';
import Laughs from './laughs';

import Html from './html';

const routes = (
  <div>
    <Navbar/>
    <div class="site">
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/resume' component={Resume} />
      <Route exact path='/laughs' component={Laughs} />
    </div>
  </div>
)

const App = (locals) =>
  ReactDOMServer.renderToString(
    <Html>
      <Router location={locals.path} context={{}}>
        {routes}
      </Router>
    </Html>
  )
;

export default App;