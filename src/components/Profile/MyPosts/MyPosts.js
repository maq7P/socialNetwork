import React from 'react';
import Post from './Post/Post';
import style from './myposts.module.css';

const MyPosts = ({postData}) => (
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
                    placeholder="What's new with you?">
                </textarea>
                <button className={style.btn}>add post</button>
            </div>
        </div>

    </div>
)
export default MyPosts;