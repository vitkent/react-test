const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

const initialState = {
    userList: [
        {
            id: '1',
            name: "Вадик",
        },
        {
            id: '2',
            name: "Колян",
        },
        {
            id: '3',
            name: "Семён",
        },
        {
            id: '4',
            name: "Инокентий",
        },
        {
            id: '5',
            name: "Аркаша Ипподром",
        },
    ],
    messageList: [
        {
            message: "Здарова мужики!",
        },
        {
            message: "Как дела братишка?",
        },
        {
            message: "Го в 5 на трубах!!!",
        },
    ],
    newMessageText: ''
}

const messagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE: {
            const newMessage = {message: state.newMessageText};
            return {
                ...state,
                newMessageText: '',
                messageList: [...state.messageList, newMessage] //в конец массива messageList пушим новое значени
            }
        }

        case UPDATE_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newMessageText
            }
        }
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