import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContains";
import NavigationContainer from "./components/common/Navigation/NavigationContainer";
import FollowersContainer from "./components/Followers/FollowersCotainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App({state}) {
  return ( 
  <BrowserRouter>
    <HeaderContainer/>

    <div className="app-wrapper container">
      <NavigationContainer/>
      <div className = "app-wrapper-content">
        <Route path="/profile" render={
            () => (<ProfileContainer/>)
        }/>
        <Route path="/messages" render={
            () => (<DialogsContainer/>)
        }/>
        <Route path="/followers" render={
          () => (<FollowersContainer/>)
        }/>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
