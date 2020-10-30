import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from './redux/redux-store';

let renderEntireTree = () => ReactDOM.render(
  <React.StrictMode>
    <App
        store={store}
        state={store.getState()}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

renderEntireTree();
store.subscribe(renderEntireTree);


