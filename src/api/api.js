import * as axios from "axios";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY":
            "cacb72d4-1b5a-4f57-a8f1-e95013a64714"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data);
    }
}

export const followAPI = {
    followToFriend(elId) {
        return instance.post(`follow/${elId}`, {},)
            .then(response => response.data);
    },
    unFollowToFriend(elId) {
        return instance.delete(`follow/${elId}`)
            .then(response => response.data);
    },

}
export const authMeAPI = {
    auth() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    }
}

export const getProfileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
        .then(response => response.data);
    }
}