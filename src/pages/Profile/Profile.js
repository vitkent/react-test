import React from "react";
import PostsContainer from "../../components/Posts/PostsContainer";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import './Profile.scss';

const Profile = (props) => {
    return (
        <div className="profile">
            <ProfileInfo/>
            <PostsContainer/>
        </div>
    )
}

export default Profile