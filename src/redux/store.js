import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state : {
        profilePage: {
            posts : [
                {id: 1, message: 'Hi, how are you?', likesCount: '12'},
                {id: 2, message: 'Where are you been?', likesCount: 11},
                {id: 3, message: 'Can you send me your number?', likesCount: 15},
                {id: 4, message: 'I want a pizza', likesCount: 100},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            messages : [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Hello'},
            ],
            dialogs : [
                {id: 1, name: 'Daniel'},
                {id: 2, name: 'Vadim'},
                {id: 3, name: 'Dmitry'},
                {id: 4, name: 'Dimych'},
            ],
            newMessageText: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // наблюдатель
    },


    dispatch (action) { // { type: 'ADDPOST' }

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}




window.state = store
export default store

// store - OOP