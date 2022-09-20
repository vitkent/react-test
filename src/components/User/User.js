import React from "react";
import { NavLink } from "react-router-dom";
import './User.scss'

const User = (props) => {
    return (
        <div className="user">
            <NavLink to={"/messages/" + props.id} className="user__link">{props.name}</NavLink>
        </div>
    )
}

export default User