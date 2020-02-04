import _ from 'lodash';
import Auto from './classes/Auto';

import './index.scss';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'Webpack', 'test', 'asdf'], ' ');

  return element;
}

document.body.appendChild(component());


const auto = new Auto('chevrolet', 'corsa', 'verde');