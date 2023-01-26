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
    }
}

export const ProfileAPI = {

    getUserProfile(id) {
        return instance.get(`profile/${id}`)
    }
}