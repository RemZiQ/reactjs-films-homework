import "./style.css";
import printMe from './print';

function component() {
  let element = document.createElement('div');
  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.innerHTML += 'Hello webpack';
  element.classList.add('red');
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());