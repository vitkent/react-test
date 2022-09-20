import React from "react";
import './Profile.scss'
import Posts from "../../components/Posts/Posts";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import {postList} from './state.js'

const Profile = () => {
    return (
        <div className="profile">
            <ProfileInfo/>
            <Posts postList={postList}/>
        </div>
    )
}

export default Profile