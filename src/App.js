import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navigation from './components/Navigation/Navigation';
import {BrowserRouter, Route} from 'react-router-dom';
import Friends from './components/Friends/Friends';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App({state, store}) {
  return ( 
  <BrowserRouter>
    <Header/>
    <div className="app-wrapper container">
      <Navigation/>
      <div className = "app-wrapper-content">
        <Route path="/profile" render={
            () => (<Profile
                store={store}
                dataLinks={state.settingsOfLinks.profile}
            />)
        }/>
        <Route path="/messages" render={
            () => (<DialogsContainer
                store={store}
            />)
        }/>
        <Route path="/friends" render={
            () => (<Friends 
              friendsData={state.sidebar.friends}
              dataLinks={state.settingsOfLinks.friends}/>)
        }/>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
