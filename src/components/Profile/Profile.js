import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'
import style from './profile.module.css'

const Profile = ({postData}) => (
    <main>
        <ProfileInfo/>
        <div className={style.posts}>
            <MyPosts postData={postData}/>
        </div>
    </main>
)
export default Profile;