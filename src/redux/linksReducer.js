let initState = {
    friends: [{
            to: '/friends/all',
            text: 'All friends',
            count: 123
        },
        {
            to: '/friends/online',
            text: 'Online friends',
            count: 12
        },
        {
            to: '/friends/find',
            text: 'Find friends',
            count: null
        },
    ],
    masseges: [{
            to: '/messages/chats',
            text: 'Chats',
            count: 2
        },
        {
            to: '/messages/status',
            text: 'Status',
            count: 2
        },
    ],
    profile: [{
            to: '/profile/overview',
            text: 'OVERVIEW'
        },
        {
            to: '/profile/posts',
            text: 'POSTS',
            count: 2
        },
        {
            to: '/profile/friends',
            text: 'FRIENDS',
            count: 20
        },
        {
            to: '/profile/following',
            text: 'FOLLOWING',
            count: 7
        },
        {
            to: '/profile/music',
            text: 'MUSIC',
            count: 14
        },
    ],
}
const linksReducer = (state = initState, action) => {
    return state
}
export default linksReducer