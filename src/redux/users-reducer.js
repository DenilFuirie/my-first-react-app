const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users : [
        {id: 1, photoUrl: 'https://c7.uihere.com/files/831/88/865/user-profile-computer-icons-user-interface-mystique.jpg' ,
            followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minks', country: 'Belarus'}},
        {id: 2, photoUrl: 'https://c7.uihere.com/files/831/88/865/user-profile-computer-icons-user-interface-mystique.jpg',followed: true, fullName: 'Sasha', status: 'I am a boss', location: {city: 'Moscow', country: 'Russia'}},
        {id: 3, photoUrl: 'https://c7.uihere.com/files/831/88/865/user-profile-computer-icons-user-interface-mystique.jpg', followed: false, fullName: 'Andrew', status: 'I am a boss', location: {city: 'Kiev', country: 'Ukraine'}},

    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return  { ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return  { ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return { ...state, users: [ ...state.users, ...action.users] }
        }
        default:
            return state;
    }

}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (userId) => ({type: SET_USERS, userId})

export default usersReducer;