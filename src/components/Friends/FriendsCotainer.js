import React from 'react';
import Friends from "./Friends";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";//utilities

let mapStateToProps = (state) => {
    return {
        friendsData: state.sidebar.friends,
        dataLinks: state.settingsOfLinks.friends
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)
export default FriendsContainer;


// So it was before react-redux

// const FriendsContainer = () => (
//     <StoreContext.Consumer>
//         {store => {
//             const friendsData = store.getState().sidebar.friends;
//             const dataLinks = store.getState().settingsOfLinks.friends;
//
//             return <Friends friendsData={friendsData} dataLinks={dataLinks}/>
//         }}
//     </StoreContext.Consumer>
// )
// export default FriendsContainer;