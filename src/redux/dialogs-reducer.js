const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    let stateCopy = {...state,
        // messages: [...state.messages]
    };



    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy.newMessageBody = action.body
            break;
        case SEND_MESSAGE:
            let body = stateCopy.newMessageBody
            stateCopy.newMessageBody = ''
            stateCopy.messages.unshift({id: 6, message: body})
            break;
    }

    return stateCopy
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default dialogsReducer