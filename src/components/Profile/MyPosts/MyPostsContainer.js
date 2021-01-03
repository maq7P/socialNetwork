import {add_post} from '../../../redux/profileReducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux"; //utilities

let mapStateToProps = (state) => {
        return {
                posts: state.profilePage.postData,
                newPostText: state.profilePage.newPostText
        }
}
const MyPostsContainer = connect(mapStateToProps, {add_post})(MyPosts);
export default MyPostsContainer;