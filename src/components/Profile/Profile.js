import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'
import style from './profile.module.css'

const Profile = () => (
    <main>
        <ProfileInfo/>
        <div className={style.posts}>
            <MyPosts/>
        </div>
    </main>
)
export default Profile;