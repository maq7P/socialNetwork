import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/common/Navigation/Navigation';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContains";
import FriendsContainer from "./components/Friends/FriendsCotainer";

function App({state}) {
  return ( 
  <BrowserRouter>
    <Header/>
    <div className="app-wrapper container">
      <Navigation/>
      <div className = "app-wrapper-content">
        <Route path="/profile" render={
            () => (<ProfileContainer/>)
        }/>
        <Route path="/messages" render={
            () => (<DialogsContainer/>)
        }/>
        <Route path="/friends" render={
          () => (<FriendsContainer/>)
        }/>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
