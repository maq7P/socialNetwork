import React from 'react';
import Friends from "./Friends";
import StoreContext from "../../StoreContext";


const FriendsContainer = () => (
    <StoreContext.Consumer>
        {store => {
            const friendsData = store.getState().sidebar.friends;
            const dataLinks = store.getState().settingsOfLinks.friends;

            return <Friends friendsData={friendsData} dataLinks={dataLinks}/>
        }}
    </StoreContext.Consumer>
)
export default FriendsContainer;