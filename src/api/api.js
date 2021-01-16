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
    login(email, password, rememberMe = false, captcha = false) {
        return instance.post('/auth/login', {email, password, rememberMe, captcha})
            .then((response) => {
                if (response.status === 200) {
                    return response.data
                }
            })
    },
    logout() {
        return instance.delete('/auth/login')
            .then((response) => {
                if (response.status === 200) {
                    return response.data
                }
            })
    },
    authMe() {
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
    captcha() {
        return instance.get('security/get-captcha-url')
            .then(response => {
                return response.data
            })
    }
}
export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => {
                return response.data
            })
    },
    getProfileStatus(id) {
        return instance.get(`/profile/status/${id}`)
            .then(response => {
                if (response.status === 200){
                    return response.data
                }
            })
    },
    putProfileStatus(status) {
        return instance.put(`/profile/status`, {status})
            .then(response => {
                return response.data
            })
    },
    updatePhoto(file){
        const formData = new FormData()
        formData.append('image', file)
        return instance.put(`/profile/photo`, formData)
            .then(response => {
                if(response.status === 200){
                    return response.data
                }
            })
    }
}

