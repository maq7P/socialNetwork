import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './profile.module.css'
import { Route } from 'react-router-dom';
import ChangeHeader from '../common/ChangeHeader/ChangeHeader';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({dataLinks, store}) => (
    <main>
        <ProfileInfo/>
        <div className={style.containerProfile}>
            <ChangeHeader dataLinks={dataLinks}/>
            <Route path="/profile/posts" render={() => (
                <div className={style.posts}>
                    <MyPostsContainer store={store}/>
                </div>
            )}/>
        </div>
    </main>
)
export default Profile;