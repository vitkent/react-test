import React from "react";
import Title from "../../components/ui-kit/Title/Title";
import User from "../../components/User/User";
import './Users.scss';
import * as axios from 'axios';

const Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }

    const usersList = props.users.map((user, key) => (
        <User
            key={key}
            id={user.id}
            name={user.name}
            followed={user.followed}
            photo={user.photos.small}
            status={user.status}
            follow={props.follow}
            unFollow={props.unFollow}
        />
    ))

    return (
        <div className="users">
            <Title type='h1' title='Пользователи' classMod={['title--h2', 'title--mb24']}/>
            {usersList}
        </div>
    )
}

export default Users