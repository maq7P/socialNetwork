import {add_post, update_new_post} from '../../../redux/profileReducer';
import MyPosts from "./MyPosts";
import React from "react";
import {connect} from "react-redux"; //utilities

let mapStateToProps = (state) => {
        return {
                posts: state.profilePage.postData,
                newPostText: state.profilePage.newPostText
        }
}
let mapDispatchToProps = (dispatch) => {
        return {
                addPost: () => {
                        const title = '';
                        const postImg = '';
                        const whoName = 'noName';
                        const time = 'Now';
                        const whoImg = 'https://pbs.twimg.com/profile_images/1154091066611646466/k8JWQ9fd_400x400.png';

                        dispatch(add_post(title, postImg, whoName, whoImg, time));
                },
                actionRefreshNewPost: (text) => {
                        dispatch(update_new_post(text))
                }
        }

}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;