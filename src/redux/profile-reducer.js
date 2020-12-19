const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts : [
        {id: 1, message: 'Hi, how are you?', likesCount: '12'},
        {id: 2, message: 'Where are you been?', likesCount: 11},
        {id: 3, message: 'Can you send me your number?', likesCount: 15},
        {id: 4, message: 'I want a pizza', likesCount: 100},
    ],
    newPostText: 'it-kamasutra.com'
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.unshift(newPost);
            stateCopy.newPostText = ''
            return stateCopy;
        }
        case 'UPDATE-NEW-POST-TEXT': {
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.newPostText = action.newText
            return stateCopy;
        }
        default:
            return state;
    }

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer