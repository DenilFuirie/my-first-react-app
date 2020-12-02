let rerenderEntireTree = () => {
    console.log('state changed')
}

let state = {
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
}

window.state = state

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }

    state.profilePage.posts.unshift(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer; // наблюдатель
}

export default state

// store - OOP