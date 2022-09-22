import React from "react";
import './Messages.scss'
import User from "../../components/User/User";
import Message from "../../components/Message/Message";
import { sendMessageActionCreator, updateMessageTextActionCreator } from "../../messagesReducer";

const Messages = (props) => {

    const users = props.messagesPage.userList.map((user, key) => (
        <User
            key={key}
            id={user.id}
            name={user.name}
        />
    ))

    const messages = props.messagesPage.messageList.map((message, key) => (
        <li className="messages__item">
            <Message
                key={key}
                message={message.message}
            />
        </li>
    ))

    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    const onChangeTextarea = (e) => {
        const text = e.target.value;
        props.dispatch(updateMessageTextActionCreator(text));
    }

    return (
        <div className="messages">
            <div className="messages__wrap">
                <div className="messages__users-list">
                    {users}
                </div>
                <ul className="messages__list">
                    {messages}
                </ul>
            </div>
            <textarea
                onChange={ onChangeTextarea }
                value={props.messagesPage.newMessageText}
                placeholder="Напишите сообщение..."/>
            <button onClick={ sendMessage }>Отправить сообщение</button>
        </div>
    )
}

export default Messages