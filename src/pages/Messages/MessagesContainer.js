import Messages from "./Messages";
import { sendMessageActionCreator, updateMessageTextActionCreator } from "../../redux/messagesReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        userList: state.messagesPage.userList,
        messageList: state.messagesPage.messageList,
        newMessageText: state.messagesPage.newMessageText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        changeTextarea: (text) => {
            dispatch(updateMessageTextActionCreator(text));
        },
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer