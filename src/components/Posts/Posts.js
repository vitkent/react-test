import React from "react";
import './Posts.scss'
import Title from "../ui-kit/Title/Title";
import Post from "../Post/Post";

const Posts = (props) => {

    const postItems = props.postList.map((post, key) => (
        <Post
            key={key}
            src={post.src}
            message={post.message}
        />
    ))

    return (
        <div className="posts">
            <Title type='h3' title='Posts' classMod={['title--h3', 'title--mb16']}/>
            {postItems}
        </div>
    )
}

export default Posts