let initState = {
    followers: [{
            to: '/followers/all',
            text: 'Followers',
            count: 123
        },
        {
            to: '/followers/online',
            text: 'Online',
            count: 12
        },
        {
            to: '/followers/find',
            text: 'Find people',
            count: null
        },
    ],
    massages: [{
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
        // {
        //     to: '/profile/friends',
        //     text: 'FRIENDS',
        //     count: 20
        // },
        {
            to: '/profile/followers',
            text: 'FOLLOWERS',
            count: 7
        },
        {
            to: '/profile/music',
            text: 'MUSIC',
            count: 14
        },
    ],
    navigation: [
        {to: '/profile/overview', name: 'My profile'},
        {to: '/messages/chats', name: 'Messenger'},
        {to: '/followers/all', name: 'Followers'},
        {to: '/news', name: 'News'},
        {to: '/music', name: 'Music'},
        {to: '/settings', name: 'Settings'},
    ]
}
const linksReducer = (state = initState, action) => {
    return state
}
export default linksReducer