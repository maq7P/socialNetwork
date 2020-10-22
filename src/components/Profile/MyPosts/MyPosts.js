import React from 'react';
import Post from './Post/Post';
import style from './myposts.module.css';

const MyPosts = ({postData}) => (
    <>
        {postData.map(item => (
            <Post
                id={item.id}
                title={item.title}
                text={item.text}
                like={item.like}
                comments={item.comments}
                hashtags={item.hashtags}/>
        ))}
    </>
)
export default MyPosts;