import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContains";
import NavigationContainer from "./components/common/Navigation/NavigationContainer";
import FollowersContainer from "./components/Followers/FollowersCotainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/LoginPage/LoginPage";
import {got_user_data, logout, set_user_data} from "./redux/authReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initialize_app} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
      this.props.initialize_app(this.props.isAuth)
  }
  render() {
    if(!this.props.initialized){
      return <Preloader/>
    }
    return (
        <BrowserRouter>
          <HeaderContainer/>

          <div className="app-wrapper container">
            <NavigationContainer/>
            <div className="app-wrapper-content">
              <Route path="/profile" render={
                () => (<ProfileContainer/>)
              }/>
              <Route path="/messages" render={
                () => (<DialogsContainer/>)
              }/>
              <Route path="/followers" render={
                () => (<FollowersContainer/>)
              }/>
              <Route path="/login" render={
                () => (<LoginPage/>)
              }/>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

// export default App;
let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    initialized: state.app.initialized
  }
}
export default compose(
    connect(mapStateToProps, {
        initialize_app,
  }),
)(App);
