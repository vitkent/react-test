const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

const messagesReducer = (state, action) => {

    switch(action.type) {
        case SEND_MESSAGE:
            const newMessage = {
                message: state.newMessageText
            }
            state.messageList.push(newMessage);
            state.newMessageText = '';
            return state;

        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;

        default:
            return state;
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        newMessageText: text
    }
}

export default messagesReducer;