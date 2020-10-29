import React from 'react';
import Post from './Post/Post';
import style from './myposts.module.css';
import {actionCreatorAddPost, actionCreatorRefrashNewPost} from '../../../redux/profileReducer';


const MyPosts = ({postData, newPostText, dispatch}) => {

    let newPostElement = React.createRef();

    const refrashPosts = () => {
        const title = '';
        const postImg = '';
        const whoName = 'noName';
        const time = 'Now';
        const whoImg = 'https://pbs.twimg.com/profile_images/1154091066611646466/k8JWQ9fd_400x400.png';

        dispatch(actionCreatorAddPost(title, postImg, whoName, whoImg, time));
        newPostElement.current.value = '';
    }

    const onPostChange = () => {
        const text = newPostElement.current.value;
        dispatch(actionCreatorRefrashNewPost(text))
    }

    return (
    <div className={style.allSpace}>

        <div className={style.leftSide}>
            {postData.map(item => (
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
                    onClick={refrashPosts}>add post</button>
            </div>
        </div>

    </div>
)}
export default MyPosts;