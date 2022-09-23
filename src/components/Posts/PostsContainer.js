import { connect } from "react-redux";
import { addPostActionCreator, updatePostTextActionCreator } from "../../redux/profileReducer";
import Posts from "./Posts";

const mapStateToProps = (state) => {
    return {
        postList: state.profilePage.postList,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updatePostText: (text) => {
            dispatch(updatePostTextActionCreator(text));
        },
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer