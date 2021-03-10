import * as axios from "axios";




const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "1-df80-49b5-ab68-00cdc0840395"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10 ) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    auth() {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
    }

}

