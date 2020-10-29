import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './profile.module.css'
import { Route } from 'react-router-dom';
import MyPosts from './MyPosts/MyPosts';
import ChangeHeader from '../ChangeHeader/ChangeHeader';

const Profile = ({postData, dataLinks, newPostText, dispatch}) => (
    <main >
        <ProfileInfo 
            postData={postData}/>
        <div className={style.containerProfile}>
            <ChangeHeader dataLinks={dataLinks}/>
            <Route path="/profile/posts" render={() => (
                <div className={style.posts}>
                    <MyPosts 
                        postData={postData}
                        newPostText={newPostText}
                        dispatch={dispatch}
                    />
                </div>
            )}/>
        </div>
    </main>
)
export default Profile;