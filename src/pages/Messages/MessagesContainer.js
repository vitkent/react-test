import React from "react";
import Messages from "./Messages";
import { sendMessageActionCreator, updateMessageTextActionCreator } from "../../redux/messagesReducer";

const MessagesContainer = (props) => {

    const state = props.store.getState().messagesPage;

    const sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    const changeTextarea = (text) => {
        props.store.dispatch(updateMessageTextActionCreator(text));
    }

    return (
        <Messages
            userList={state.userList}
            messageList={state.messageList}
            newMessageText={state.newMessageText}
            sendMessage={sendMessage}
            changeTextarea={changeTextarea}
        />
    )
}

export default MessagesContainer