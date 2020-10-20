import React from 'react';
import Post from './Post/Post';
import style from './myposts.module.css';

const MyPosts = () => (
    <>
        <Post 
            title={"Милое"}
            text={"Это мой первый пост"}
            like={10}
            comments={2}
            hashtags={['#firstPost']}/>
        <Post
            title={"Классное"}
            text={"Классная погодка, как вам, ребят?"}
            like={12}
            comments={4}
            hashtags={['#weather', '#mood']}/>
    </>
)
export default MyPosts;