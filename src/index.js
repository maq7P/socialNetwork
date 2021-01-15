import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/redux-store.js';
import {AppInit} from "./App.js";

let renderEntireTree = () => ReactDOM.render(
  <React.StrictMode>
      <AppInit/>
  </React.StrictMode>,
  document.getElementById('root')
);

renderEntireTree();
store.subscribe(renderEntireTree);


