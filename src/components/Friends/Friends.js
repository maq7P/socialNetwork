import React from 'react';
import ChangeHeader from '../common/ChangeHeader/ChangeHeader';
import { Route } from 'react-router-dom';
import FriendsAll from "./FriendsAll/FriendsAll";
import FriendsFindContainer from "./FriendsFind/FriendsFindContainer";


const Friends = ({friendsData, dataLinks}) => {
    return (
    <>
        <ChangeHeader dataLinks={dataLinks}/>
        <Route path={'/friends/all'} render={() => (
            <FriendsAll/>
        )}/>
        <Route path="/friends/online">

        </Route>
        <Route path="/friends/find" render={() => (
            <FriendsFindContainer/>
        )}/>
    </>
)}
export default Friends;