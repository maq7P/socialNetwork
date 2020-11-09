import React from 'react';
import Followers from "./Followers";
import {connect} from "react-redux";//utilities

let mapStateToProps = (state) => {
    return {
        followersData: state.sidebar.followers,
        dataLinks: state.settingsOfLinks.followers
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}
const FollowersContainer = connect(mapStateToProps, mapDispatchToProps)(Followers)
export default FollowersContainer;


// So it was before react-redux

// const FollowersContainer = () => (
//     <StoreContext.Consumer>
//         {store => {
//             const friendsData = store.getState().sidebar.friends;
//             const dataLinks = store.getState().settingsOfLinks.friends;
//
//             return <Followers friendsData={friendsData} dataLinks={dataLinks}/>
//         }}
//     </StoreContext.Consumer>
// )
// export default FollowersContainer;