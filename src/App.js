import React, {Suspense} from 'react';
import './App.css';
import {BrowserRouter, HashRouter, Route} from 'react-router-dom';
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initialize_app} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store.js";

import NavigationContainer from "./components/common/Navigation/NavigationContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContains from './components/Profile/ProfileContains'
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const LoginPage = React.lazy(() => import('./components/LoginPage/LoginPage'));
const FollowersContainer = React.lazy(() => import('./components/Followers/FollowersCotainer'));

export class App extends React.Component {
  componentDidMount() {
      this.props.initialize_app(this.props.isAuth)
  }
  render() {
    if(!this.props.initialized){
      return <Preloader/>
    }
    return(
      <>
          <HeaderContainer/>

          <div className="app-wrapper container">
            <NavigationContainer/>
            <div className="app-wrapper-content">
              <Route path="/profile" render={
                () => (
                        <ProfileContains/>
                    )
              }/>
              <Route path="/messages" render={
                () => (
                    <Suspense fallback={<Preloader />}>
                        <DialogsContainer/>
                    </Suspense>
                    )
              }/>
              <Route path="/followers" render={
                () => (
                    <Suspense fallback={<Preloader />}>
                        <FollowersContainer/>
                    </Suspense>
                    )
              }/>
              <Route path="/login" render={
                () => (
                    <Suspense fallback={<Preloader />}>
                        <LoginPage/>
                    </Suspense>
                    )
              }/>
            </div>
          </div>
    </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    initialized: state.app.initialized
  }
}
const AppContainer =  compose(
    connect(mapStateToProps, {
        initialize_app,
  }),
)(App);
export const AppInit = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}
