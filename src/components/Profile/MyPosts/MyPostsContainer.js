import {actionCreatorAddPost, actionCreatorRefrashNewPost} from '../../../redux/profileReducer';
import MyPosts from "./MyPosts";
import React from "react";

const MyPostsContainer = ({store}) => {
        const state = store.getState();
        const dispatch = store.dispatch;
        const postData = state.profilePage.postData;
        let newPostText = state.profilePage.newPostText;

        const refreshPosts = () => {
                const title = '';
                const postImg = '';
                const whoName = 'noName';
                const time = 'Now';
                const whoImg = 'https://pbs.twimg.com/profile_images/1154091066611646466/k8JWQ9fd_400x400.png';

                dispatch(actionCreatorAddPost(title, postImg, whoName, whoImg, time));
        }

        const onPostChange = (text) => {
                dispatch(actionCreatorRefrashNewPost(text))
        }

        return (
            <MyPosts
                addPost={refreshPosts}
                actionRefreshNewPost={onPostChange}
                newPostText={newPostText}
                posts={postData}
            />
        )
}
export default MyPostsContainer;