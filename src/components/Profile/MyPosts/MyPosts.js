import React from 'react';
import Post from './Post/Post';
import style from './myposts.module.css';
import {Field, reduxForm} from 'redux-form'
import {required, maxLength} from "../../../utilities/validators";
import {TextArea} from "../../common/FormsControl/FormsControl";


const MyPosts = ({add_post, posts}) => {
    const newPost = (data) => {

        const title = '';
        const postImg = '';
        const whoName = 'noName';
        const time = 'Now';
        const whoImg = 'https://pbs.twimg.com/profile_images/1154091066611646466/k8JWQ9fd_400x400.png';
        const text = data.newPostText;

        add_post(title, postImg, whoName, whoImg, time, text)
    }

    return (
    <div className={style.allSpace}>

        <div className={style.leftSide}>
            {posts.map(item => (
                <Post
                    key={item.id}
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
            <ReduxFormPost onSubmit={newPost}/>
            {/* <from className={style.creatPost}>
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
            </from> */}
        </div>

    </div>
)}
const maxLength20 = maxLength(20)
const FormPost =(props) => {
    return (
        <form className={style.creatPost} onSubmit={props.handleSubmit}>
            <Field
                className={style.textarea}
                validate={[required, maxLength20]}
                component={TextArea}
                name={'newPostText'}
                placeholder="What's new with you?"
            />
            <button className={style.btn}>add post</button>
        </form>
    )
}
const ReduxFormPost = reduxForm({
    form: 'newPost'
})(FormPost)

export default MyPosts;