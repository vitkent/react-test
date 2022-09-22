import React from "react";
import './Posts.scss'
import Title from "../ui-kit/Title/Title";
import Post from "../Post/Post";
import { addPostActionCreator, updatePostTextActionCreator } from "../../profileReducer";

const Posts = (props) => {

    const postItems = props.postList.map((post, key) => (
        <Post
            key={key}
            message={post.message}
        />
    ))

    const newPost = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onPostChange = () => {
        const text = newPost.current.value;
        props.dispatch(updatePostTextActionCreator(text));
    }

    return (
        <div className="posts">
            <Title type='h3' title='Posts' classMod={['title--h3', 'title--mb16']}/>
            <textarea onChange={ onPostChange } ref={ newPost } value={props.newPostText}/>
            <button onClick={ addPost }>Добавить пост</button>
            {postItems}
        </div>
    )
}

export default Posts