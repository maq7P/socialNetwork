import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from './redux/redux-store';
import {Provider} from "react-redux";


let renderEntireTree = () => ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

renderEntireTree();
store.subscribe(renderEntireTree);


