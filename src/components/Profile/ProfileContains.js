import React from 'react'
import StoreContext from "../../StoreContext";
import Profile from "./Profile";
import {connect} from "react-redux";//utilities

let mapStateToProps = (state) => {
    return {
        dataLinks: state.settingsOfLinks.profile
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}

}
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer;

// So it was before react-redux

// const ProfileContainer = () => {
//     return <StoreContext.Consumer>
//         {store => {
//             const dataLinks= store.getState().settingsOfLinks.profile;
//             return <Profile store={store} dataLinks={dataLinks}/>
//         }}
//     </StoreContext.Consumer>
// }
// export default ProfileContainer;