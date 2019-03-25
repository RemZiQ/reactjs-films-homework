// Need to use buffer.js for auto updating project with help HMR

import React from 'react';
import { render } from 'react-dom';
import Signature from './components/signature/index';

function component() {
  render(<Signature name="Yehor Remizov" />, document.getElementById('root'));
}

export default component;
