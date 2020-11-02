const ADD_POST = 'ADD-POST'
const REFRASH_NEW_POST = 'REFRASH-NEW-POST'
let initState = {
    postData: [{
            id: 1,
            title: 'Первый',
            text: 'Это мой первый пост',
            like: 10,
            comments: 2,
            hashtags: ['#firstPost'],
            postImg: 'https://cdn1.img.sputniknewslv.com/images/1318/02/13180226.jpg',
            whoName: 'Max',
            whoImg: 'https://sun9-64.userapi.com/gN79EhxURENQ4f55w6rPGIFdl0Hr_Q4X0BXS_Q/lJZxeSC7TGc.jpg',
            time: '10 минут назад'
        },
        {
            id: 2,
            title: 'Классное',
            text: 'Классная погодка, как вам, ребят?',
            like: 10,
            comments: 2,
            hashtags: ['#firstPost', '#trr'],
            whoName: 'Yulia',
            whoImg: 'https://sun9-20.userapi.com/_xRHT4Cb7wdm028L5F7Ua7eTc7sFG4Coqnz40Q/Y9wkbsqGFgU.jpg',
            time: '15 минут назад'
        },
    ],
    newPostText: ''
}

const profileReducer = (state = initState, action) => {

    const addPost = (title = null, postImg = null, whoName, whoImg, time) => {
        return {    //create new state
            ...state,
            postData: [{
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
            }, ...state.postData],
            newPostText: ''
        }
    }
    const refreshNewPostText = (newText) => {
        return {
            ...state,
            newPostText: newText
        }
    }

    switch (action.type) {
        case ADD_POST:
            return addPost(action.post_title = null, action.post_img = null, action.post_whoName, action.post_whoImg, action.post_time)
        case REFRASH_NEW_POST:
            return refreshNewPostText(action.post_text)
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