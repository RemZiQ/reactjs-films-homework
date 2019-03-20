import "./style.css";
import printMe from './print';
import printMe2_0 from './anotherButton';

function component() {
  let element = document.createElement('div');
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
  module.hot.accept(['./print.js', './anotherButton.js'], function() {
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  })
}
