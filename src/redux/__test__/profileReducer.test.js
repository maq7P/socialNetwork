import profileReducer, {add_post, del_post} from "../profileReducer";
import React from "react";
let initStateTest = {
    postData: [
        {
            id: 1,
            title: 'exmple',
            text: 'test',
            like: 1,
            comments: 1,
            hashtags: ['#test'],
            postImg: 'https://cdn1.img.sputniknewslv.com/images/1318/02/13180226.jpg',
            whoName: 'Max',
            whoImg: 'https://sun9-64.userapi.com/gN79EhxURENQ4f55w6rPGIFdl0Hr_Q4X0BXS_Q/lJZxeSC7TGc.jpg',
            time: '10 минут назад'
        },
    ],
    profileInfo: null,
    status: '',
    flagLoading: false
}
it('Should be exist and testing add_post', () => {
    const action = add_post(
        'test', '', 'test', '', 'now', 'test'
    )
    let reducer = profileReducer(initStateTest, action)

    expect(reducer.postData.length).toBe(2)
})
it('Should be inner value is defined', () => {
    const action = add_post(
        'Success',
        'Success',
        'Success',
        'Success',
        'Success',
        'Success'
    )
    let reducer = profileReducer(initStateTest, action)

    expect(reducer.postData[0].title).toBe('Success')
    expect(reducer.postData[0].text).toBe('Success')
    expect(reducer.postData[0].whoName).toBe('Success')
    expect(reducer.postData[0].whoImg).toBe('Success')
    expect(reducer.postData[0].time).toBe('Success')
})
it('TDD | Should be action of del_post', () => {
    const action = del_post()
    expect(action).define
})
it('TDD | Should be action creator del post and be corrected.' +
    'Length of array should be decrement', () => {
    const action = del_post(1)
    let reducer = profileReducer(initStateTest, action)
    expect(reducer.postData.length).toBe(0)
})

