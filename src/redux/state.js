let state = {
    profilePage: {
        postData: [
            {id: 1, title: 'Первый',text: 'Это мой первый пост', like: 10, comments: 2, hashtags: ['#firstPost']},
            {id: 2, title: 'Классное',text: 'Классная погодка, как вам, ребят?', like: 10, comments: 2, hashtags: ['#firstPost']},
        ]
    },
    messagesPage: {
        dialogsData: [
            {id: 1, name: "Kolia Pupkin", lastText: "...bot", img: 'https://static10.tgstat.ru/channels/_0/49/49b77c2e60267e7b1e511c1084ed596e.jpg'},
            {id: 2, name: "Anton Putin", lastText: "...bot", img: 'https://seek-team-prod.s3.fr-par.scw.cloud/users/5f5f165654577674874172.jpg'},
        ],
            dataMessages: [
            {id: 1, text: 'Hey', time: '10:20', img: 'https://static10.tgstat.ru/channels/_0/49/49b77c2e60267e7b1e511c1084ed596e.jpg', me: false},
            {id: 2, text: 'Hey, dude!', time: '10:25', img: 'https://sun9-49.userapi.com/dj9EjEZYf_dAiW3T8Dxg1HVG2CxySACD-nuPDg/UoBLmZKdaXc.jpg', me: true},
            {id: 2, text: 'Yes, of course234444444weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444442444444444444444444444444444444444444444444444!', time: '10:25', img: 'https://sun9-49.userapi.com/dj9EjEZYf_dAiW3T8Dxg1HVG2CxySACD-nuPDg/UoBLmZKdaXc.jpg', me: true},
            {id: 1, text: 'Yes, of eeee44!', time: '10:25', img: 'https://static10.tgstat.ru/channels/_0/49/49b77c2e60267e7b1e511c1084ed596e.jpg', me: false},
            {id: 1, text: 'Yes, of eeee44 asicjuhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk sacji jsaiccccccccc sadjjjjjjjjjjjjjjjjjjjj sadasddadad asdda!', time: '10:25', img: 'https://static10.tgstat.ru/channels/_0/49/49b77c2e60267e7b1e511c1084ed596e.jpg', me: false},
            {id: 1, text: 'Hey', time: '10:20', img: 'https://static10.tgstat.ru/channels/_0/49/49b77c2e60267e7b1e511c1084ed596e.jpg', me: false},
            {id: 2, text: 'Hey, dude!', time: '10:25', img: 'https://sun9-49.userapi.com/dj9EjEZYf_dAiW3T8Dxg1HVG2CxySACD-nuPDg/UoBLmZKdaXc.jpg', me: true},
            {id: 2, text: 'Yes, of course234444444weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444442444444444444444444444444444444444444444444444!', time: '10:25', img: 'https://sun9-49.userapi.com/dj9EjEZYf_dAiW3T8Dxg1HVG2CxySACD-nuPDg/UoBLmZKdaXc.jpg', me: true},
            {id: 1, text: 'Yes, of eeee44!', time: '10:25', img: 'https://static10.tgstat.ru/channels/_0/49/49b77c2e60267e7b1e511c1084ed596e.jpg', me: false},
            {id: 1, text: 'Yes, of eeee44 asicjuhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk sacji jsaiccccccccc sadjjjjjjjjjjjjjjjjjjjj sadasddadad asdda!', time: '10:25', img: 'https://static10.tgstat.ru/channels/_0/49/49b77c2e60267e7b1e511c1084ed596e.jpg', me: false},
            {id: 1, text: 'Hey', time: '10:20', img: 'https://static10.tgstat.ru/channels/_0/49/49b77c2e60267e7b1e511c1084ed596e.jpg', me: false},
            {id: 2, text: 'Hey, dude!', time: '10:25', img: 'https://sun9-49.userapi.com/dj9EjEZYf_dAiW3T8Dxg1HVG2CxySACD-nuPDg/UoBLmZKdaXc.jpg', me: true},
            {id: 2, text: 'Yes, of course234444444weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444442444444444444444444444444444444444444444444444!', time: '10:25', img: 'https://sun9-49.userapi.com/dj9EjEZYf_dAiW3T8Dxg1HVG2CxySACD-nuPDg/UoBLmZKdaXc.jpg', me: true},
            {id: 1, text: 'Yes, of eeee44!', time: '10:25', img: 'https://static10.tgstat.ru/channels/_0/49/49b77c2e60267e7b1e511c1084ed596e.jpg', me: false},
            {id: 1, text: 'Yes, of eeee44 asicjuhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk sacji jsaiccccccccc sadjjjjjjjjjjjjjjjjjjjj sadasddadad asdda!', time: '10:25', img: 'https://static10.tgstat.ru/channels/_0/49/49b77c2e60267e7b1e511c1084ed596e.jpg', me: false},
            {id: 1, text: 'Hey', time: '10:20', img: 'https://static10.tgstat.ru/channels/_0/49/49b77c2e60267e7b1e511c1084ed596e.jpg', me: false},
            {id: 2, text: 'Hey, dude!', time: '10:25', img: 'https://sun9-49.userapi.com/dj9EjEZYf_dAiW3T8Dxg1HVG2CxySACD-nuPDg/UoBLmZKdaXc.jpg', me: true},
            {id: 2, text: 'Yes, of course234444444weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444442444444444444444444444444444444444444444444444!', time: '10:25', img: 'https://sun9-49.userapi.com/dj9EjEZYf_dAiW3T8Dxg1HVG2CxySACD-nuPDg/UoBLmZKdaXc.jpg', me: true},
            {id: 1, text: 'Yes, of eeee44!', time: '10:25', img: 'https://static10.tgstat.ru/channels/_0/49/49b77c2e60267e7b1e511c1084ed596e.jpg', me: false},
            {id: 1, text: 'Yes, of eeee44 asicjuhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk sacji jsaiccccccccc sadjjjjjjjjjjjjjjjjjjjj sadasddadad asdda!', time: '10:25', img: 'https://static10.tgstat.ru/channels/_0/49/49b77c2e60267e7b1e511c1084ed596e.jpg', me: false},
        ],
    },
    slidebar: {
        friends: [
            {id: 1, name: "Kolia Pupkin", img: 'https://static10.tgstat.ru/channels/_0/49/49b77c2e60267e7b1e511c1084ed596e.jpg', online: false},
        ]
    },
    settingsOfLinks: {
        friends: [
            {to:'/friends/all', text:'All friends', count: 123},
            {to:'/friends/online', text:'Online friends', count: 12},
            {to:'/friends/find', text: 'Find friends', count: null},
        ],
        masseges: [
            {to:'/messages/chats', text:'Chats', count: 2},
            {to:'/messages/status', text:'Status', count: 2},
        ],
    }
}
export default state;