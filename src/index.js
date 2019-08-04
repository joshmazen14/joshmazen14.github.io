import React from 'preact';

import App from './app';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import './styles.css';

React.render(
  <App />,
  document.getElementById('root'),
);