import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,).then(response => response.data)
    },
    willUnfollow(id) {
        return instance.delete(`follow/${id}`,)
    },
    willFollow(id) {
        return instance.post(`follow/${id}`, null,)
    },
}

export const authAPI = {
    me (){
        return instance.get(`auth/me`)
    },
    login (email, password, rememberMe = false){
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout (){
        return instance.delete('auth/login')
    }
}

export const profileAPI = {
    getUserProfile(id) {
        return instance.get(`profile/${id}`)
    },
    getUserStatus(id) {
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status) {
        return instance.put('profile/status/', {status: status})
    }
}