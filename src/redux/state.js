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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }

            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}




window.state = store
export default store

// store - OOP