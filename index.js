import App from './src/app';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import './src/styles.css';

export default function render(locals) {
  return '<!DOCTYPE html>' + App(locals);
}