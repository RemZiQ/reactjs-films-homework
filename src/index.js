import React from 'react';
import { render } from 'react-dom';
import './style.css';
import printMe from './print';
import printMe2_0 from './anotherButton';
import Signature from './signature';

function component() {
  const element = document.createElement('div');
  element.setAttribute('id', 'root');
  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  const anotherButton = document.createElement('button');
  anotherButton.innerHTML = 'Another clickable example';
  anotherButton.onclick = printMe2_0;

  element.innerHTML += 'Hello webpack';
  element.classList.add('red');
  element.appendChild(btn);
  element.appendChild(anotherButton);
  return element;
}

let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept(['./print.js', './anotherButton.js'], () => {
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  });
}

render(<Signature />, document.getElementById('root'));
