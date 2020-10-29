import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from './redux/state';

let renderEntireTree = () => ReactDOM.render(
  <React.StrictMode>
    <App 
        state={store.getStore} 
        addPost={store.addPost.bind(store)} 
        refrashNewPostText={store.refrashNewPostText.bind(store)}
        addMessage={store.addMessage.bind(store)}
        refrashNewMessageText={store.refrashNewMessageText.bind(store)}/>
  </React.StrictMode>,
  document.getElementById('root')
);

renderEntireTree();

store.bindFromIndex(renderEntireTree);


