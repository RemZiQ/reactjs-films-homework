import './style.css';
import Layer from './Layer.png';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  const image = new Image();
  image.src = Layer;
  element.appendChild(image);
  return element;
}

document.body.appendChild(component());