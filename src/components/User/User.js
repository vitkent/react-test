import React from "react";
import Button from "../ui-kit/Button/Button";
import './User.scss';
import user from '../../assets/img/user.png'

const User = (props) => {
    return (
        <div className="user">
            <img className="user__photo"
                src={props.photo != null ? props.photo : user }
                alt={props.name}
                width='100'
                height='100'
            />
            <span className="user__name">{props.name}</span>
            <Button
                text={props.followed ? 'Отписаться' : 'Подписаться'}
                mod={props.followed ? ['button--unfollow'] : ['button--follow']}
                onClick={() => {
                    if (props.followed) props.unFollow(props.id);
                    else props.follow(props.id);
                }}
            />
        </div>
    )
}

export default User