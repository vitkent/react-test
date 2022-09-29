import React from "react";
import Title from "../../components/ui-kit/Title/Title";
import User from "../../components/User/User";
import './Users.scss';

const Users = (props) => {

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

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const pages = [];

    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className="users">
            <Title type='h1' title='Пользователи' classMod={['title--h2', 'title--mb24']}/>
            {pages.slice(0, 10).map(page => (
                <span
                className={["users__page", props.currentPage === page && "users__page--active"].join(' ')}
                onClick={() => {props.onPageChange(page);}}
                >{page}</span>
            ))}
            {usersList}
        </div>
    )
}

export default Users;