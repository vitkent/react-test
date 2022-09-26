import React from "react";
import './Messages.scss'
import UserName from "../../components/UserName/UserName";
import Message from "../../components/Message/Message";

const Messages = (props) => {

    const users = props.userList.map((user, key) => (
        <UserName
            key={key}
            id={user.id}
            name={user.name}
        />
    ))

    const messages = props.messageList.map((message, key) => (
        <li className="messages__item" key={key}>
            <Message
                message={message.message}
            />
        </li>
    ))

    const onSendMessage = () => {
        props.sendMessage();
    }

    const onChangeTextarea = (e) => { // делаем так чтобы не использовать ref как в posts
        const text = e.target.value;
        props.changeTextarea(text);
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
                value={props.newMessageText}
                placeholder="Напишите сообщение..."/>
            <button onClick={ onSendMessage }>Отправить сообщение</button>
        </div>
    )
}

export default Messages