import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const text = 'Hello World';


const elem = (
  <div>
    <h2>Текст: {text + ' Hell ' + 2023}</h2>
    <input type='text' />
    <button>Click</button>
  </div>
);

// const elem = React.createElement('h2', {className: 'greting'}, 'Hello World');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem,
);