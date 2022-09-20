import React from "react";
import './Messages.scss'
import User from "../../components/User/User";
import Message from "../../components/Message/Message";
import {userList, messageList} from './state.js'

const Messages = () => {

    const users = userList.map((user, key) => (
        <User
            key={key}
            id={user.id}
            name={user.name}
        />
    ))

    const messages = messageList.map((message, key) => (
        <Message
            key={key}
            message={message.message}
        />
    ))

    return (
        <div className="messages">
            <div className="messages__users-list">
                {users}
            </div>
            <div className="messages__list">
                {messages}
            </div>
        </div>
    )
}

export default Messages