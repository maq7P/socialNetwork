import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navigation from './components/Navigation/Navigation';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return ( 
  <BrowserRouter>
    <Header/>
    <div className="app-wrapper container">
      <Navigation/>
      <div className = "app-wrapper-content">
        <Route path="/profile" component={Profile}/>
        <Route path="/messages" component={Dialogs}/>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
