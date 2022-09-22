import React from "react";
import './Post.scss'

const Post = (props) => {
    return (
        <div className="post">
            <img className="post__avatar" src='https://zoomwiki.ru/wp-content/uploads/2020/12/avatarki-dlya-zuma4.jpg' alt='Ава' width='50' height='50'></img>
            <p className="post__message">{props.message}</p>
        </div>
    )
}

export default Post