import React from 'react';
import ChangeHeader from '../common/ChangeHeader/ChangeHeader';
import { Route } from 'react-router-dom';
import FollowersAll from "./FollowersAll/FollowersAll";
import FollowersFindContainer from "./FollowersFind/FollowersFindContainer";


const Followers = ({friendsData, dataLinks}) => {
    return (
    <>
        <ChangeHeader dataLinks={dataLinks} right={'FORM'}/>

        <Route path={'/followers/all'} render={() => (
            <FollowersAll/>
        )}/>
        <Route path="/followers/online">

        </Route>
        <Route path="/followers/find" render={() => (
            <FollowersFindContainer/>
        )}/>
    </>
)}
export default Followers;