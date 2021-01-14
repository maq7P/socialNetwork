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
