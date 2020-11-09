import * as axios from "axios";
const API_KEY = 'aeafe9d5-1c2a-40f8-9e0c-40b9f734dfa2'
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": API_KEY
    }

})
export const usersAPI = {
    getLogin(){
        return instance.get('auth/me')
            .then((response) => {
                if(response.status === 200) {
                    return response.data
                }
            })
    },
    getUsers(page = 1, showUsers = 10) {
        return instance.get(`users?page=${page}&count=${showUsers}`)
            .then(response => {
                return response.data
            })
    },
    follow(id){
        return instance.post(`follow/${id}`,{})
            .then(response => {
                return response.data
            })
    },
    unfollow(id){
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(id){
        return instance.get(`profile/${id}`)
            .then(response => {
                return response.data
            })
    },
}

