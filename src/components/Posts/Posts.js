import React from "react";
import './Posts.scss'
import Title from "../ui-kit/Title/Title";
import Post from "../Post/Post";

const Posts = (props) => {

    const postItems = props.postList.map((post, key) => (
        <Post
            key={key}
            message={post.message}
        />
    ))

    const newPost = React.createRef();

    const onAddPost = () => {
        props.addPost();
    }

    const onPostChange = () => {
        const text = newPost.current.value;
        props.updatePostText(text);
    }

    return (
        <div className="posts">
            <Title type='h2' title='Посты' classMod={['title--h3', 'title--mb16']}/>
            <textarea onChange={ onPostChange } ref={ newPost } value={props.newPostText}/>
            <button onClick={ onAddPost }>Добавить пост</button>
            {postItems}
        </div>
    )
}

export default Posts