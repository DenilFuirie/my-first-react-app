import * as axios from "axios";




const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "d905a690-85a3-4612-a2ad-934f43c4cc84"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10 ) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
}

