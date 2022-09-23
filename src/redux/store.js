import profileReducer from "./profileReducer"
import messagesReducer from "./messagesReducer"

export const store = {

    _state: {
        profilePage: {
            postList: [
                {
                    message: 'Это мое первое сообщение!!!!',
                },
                {
                    message: 'Всем хай, как дела?',
                },
            ],
            newPostText: ''
        },
        messagesPage: {
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
    },
    _callSubscriber()  {
        console.log('')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

        this._callSubscriber(this._state);
    }
}