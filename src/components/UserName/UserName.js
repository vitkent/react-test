import React from "react";
import { NavLink } from "react-router-dom";
import './UserName.scss'

const UserName = (props) => {
    return (
        <div className="user-name">
            <NavLink to={"/messages/" + props.id} className="user-name__link">{props.name}</NavLink>
        </div>
    )
}

export default UserName