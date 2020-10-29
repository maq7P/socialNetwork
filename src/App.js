import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navigation from './components/Navigation/Navigation';
import {BrowserRouter, Route} from 'react-router-dom';
import Friends from './components/Friends/Friends';

function App({state, dispatch}) {
  return ( 
  <BrowserRouter>
    <Header/>
    <div className="app-wrapper container">
      <Navigation/>
      <div className = "app-wrapper-content">
        <Route path="/profile" render={
            () => (<Profile 
              postData={state.profilePage.postData}
              dataLinks={state.settingsOfLinks.profile}
              newPostText={state.profilePage.newPostText}
              dispatch={dispatch}/>)
        }/>
        <Route path="/messages" render={
            () => (<Dialogs 
              dialogsData={state.messagesPage.dialogsData} 
              dataMessages={state.messagesPage.dataMessages}
              dataLinks={state.settingsOfLinks.masseges}
              newMessageText={state.messagesPage.newMessageText}
              dispatch={dispatch}/>)
        }/>
        <Route path="/friends" render={
            () => (<Friends 
              friendsData={state.slidebar.friends}
              dataLinks={state.settingsOfLinks.friends}/>)
        }/>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
