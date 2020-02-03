import _ from 'lodash';
import test from './test'

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'Webpack', 'test', 'asdf'], ' ');

  return element;
}

document.body.appendChild(component());