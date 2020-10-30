import React from 'react'
import StoreContext from "../../StoreContext";
import Profile from "./Profile";

const ProfileContainer = () => {
    return <StoreContext.Consumer>
        {store => {
            const dataLinks= store.getState().settingsOfLinks.profile;
            return <Profile store={store} dataLinks={dataLinks}/>
        }}
    </StoreContext.Consumer>
}
export default ProfileContainer;