import React from 'react';
import { render } from 'react-dom';
import { App } from './modules/App/index.js';
import './styles/styles.css';

const rootDiv = document.createElement('div');
rootDiv.id = 'root';

document.body.appendChild(rootDiv);

render(<App />, document.querySelector('#root'));
