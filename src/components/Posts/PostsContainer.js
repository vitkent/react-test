import React from "react";
import { addPostActionCreator, updatePostTextActionCreator } from "../../redux/profileReducer";
import Posts from "./Posts";

const PostsContainer = (props) => {

    const state = props.store.getState().profilePage;

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const onPostChange = (text) => {
        props.store.dispatch(updatePostTextActionCreator(text));
    }

    return (
        <Posts
            addPost={addPost}
            updatePostText={onPostChange}
            postList={state.postList}
            newPostText={state.newPostText}/>
    )
}

export default PostsContainer