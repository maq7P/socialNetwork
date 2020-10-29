const ADD_POST = 'ADD-POST'
const REFRASH_NEW_POST = 'REFRASH-NEW-POST'

const profileReducer = (state, action) => {
    const addPost = (title = null, postImg = null, whoName, whoImg, time) => {
            const newObj = {
                id: 1,
                title,
                text: state.newPostText,
                like: 0,
                comments: 0,
                hashtags: ['#firstPost'],
                postImg,
                whoName,
                whoImg,
                time,
            }
            state.postData.push(newObj)
            state.newPostText = ''
        }
    const refrashNewPostText = (newText) => {
        state.newPostText = newText;
    }

    switch (action.type) {
        case ADD_POST:
            addPost(action.post_title = null, action.post_img = null, action.post_whoName, action.post_whoImg, action.post_time)
            return state;
        case REFRASH_NEW_POST:
            refrashNewPostText(action.post_text)
            return state;
        default: 
            return state;
    }
}
export const actionCreatorAddPost = (post_title, post_img, post_whoName, post_whoImg, post_time) => ({
    type: ADD_POST,
    post_title,
    post_img,
    post_whoName,
    post_whoImg,
    post_time
})
export const actionCreatorRefrashNewPost = (post_text) => ({
    type: REFRASH_NEW_POST,
    post_text
})
export default profileReducer