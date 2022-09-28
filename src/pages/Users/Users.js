import React from "react";
import Title from "../../components/ui-kit/Title/Title";
import User from "../../components/User/User";
import './Users.scss';
import * as axios from 'axios';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChange = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        const usersList = this.props.users.map((user, key) => (
            <User
                key={key}
                id={user.id}
                name={user.name}
                followed={user.followed}
                photo={user.photos.small}
                status={user.status}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
            />
        ))

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        const pages = [];

        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className="users">
                <Title type='h1' title='Пользователи' classMod={['title--h2', 'title--mb24']}/>
                {pages.slice(0, 10).map(page => (
                    <span
                    className={["users__page", this.props.currentPage === page && "users__page--active"].join(' ')}
                    onClick={(e) => {this.onPageChange(page);}}
                    >{page}</span>
                ))}
                {usersList}
            </div>
        )
    }
}

export default Users;