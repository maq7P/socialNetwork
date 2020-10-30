import React from 'react';
import Post from './Post/Post';
import style from './myposts.module.css';
import {actionCreatorAddPost, actionCreatorRefrashNewPost} from '../../../redux/profileReducer';


const MyPosts = ({addPost, actionRefreshNewPost, newPostText, posts}) => {

    let newPostElement = React.createRef();

    const refreshPosts = () => {
        addPost()
        newPostElement.current.value = '';
    }

    const onPostChange = () => {
        const text = newPostElement.current.value;
        actionRefreshNewPost(text)
    }

    return (
    <div className={style.allSpace}>

        <div className={style.leftSide}>
            {posts.map(item => (
                <Post
                    id={item.id}
                    title={item.title}
                    text={item.text}
                    like={item.like}
                    comments={item.comments}
                    hashtags={item.hashtags}
                    time={item.time}
                    whoImg={item.whoImg} 
                    whoName={item.whoName}
                    postImg={item.postImg}/>
            ))}
        </div>

        <div className={style.rightSide}>
            <div className={style.creatPost}>
                <textarea
                    className={style.textarea}
                    placeholder="What's new with you?"
                    value={newPostText}
                    onChange={onPostChange}
                    ref={newPostElement}
                />
                <button 
                    className={style.btn}
                    onClick={refreshPosts}>add post</button>
            </div>
        </div>

    </div>
)}
export default MyPosts;