import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContains";
import NavigationContainer from "./components/common/Navigation/NavigationContainer";
import FollowersContainer from "./components/Followers/FollowersCotainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
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
        <Route path="/login" render={
          () => (<LoginPage/>)
        }/>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
// import React from 'react';
// import './App.css';
// import {
//   BrowserRouter,
//   Route,
//   withRouter
// } from 'react-router-dom';
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import ProfileContainer from "./components/Profile/ProfileContains";
// import NavigationContainer from "./components/common/Navigation/NavigationContainer";
// import FollowersContainer from "./components/Followers/FollowersCotainer";
// import HeaderContainer from "./components/Header/HeaderContainer";
// import LoginPage from "./components/LoginPage/LoginPage";
// import {
//   connect
// } from "react-redux";
// import {
//   got_user_data,
//   logout,
//   set_user_avatar,
//   set_user_data
// } from "./redux/authReducer";
// import {
//   compose
// } from "redux";

// class App extends React.Component {
//   componentDidMount() {
//     this.props.got_user_data(this.props.isAuth)
//   }
//   render() {
//     return ( <
//       BrowserRouter >
//       <
//       HeaderContainer / >

//       <
//       div className = "app-wrapper container" >
//       <
//       NavigationContainer / >
//       <
//       div className = "app-wrapper-content" >
//       <
//       Route path = "/profile"
//       render = {
//         () => ( < ProfileContainer / > )
//       }
//       /> <
//       Route path = "/messages"
//       render = {
//         () => ( < DialogsContainer / > )
//       }
//       /> <
//       Route path = "/followers"
//       render = {
//         () => ( < FollowersContainer / > )
//       }
//       /> <
//       Route path = "/login"
//       render = {
//         () => ( < LoginPage / > )
//       }
//       /> <
//       /div> <
//       /div> <
//       /BrowserRouter>
//     );
//   }
// }

// export default compose(
//   withRouter,
//   connect(null, {
//     got_user_data
//   }),
// )(App);
