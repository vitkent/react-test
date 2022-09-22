import React from "react";
import Posts from "../../components/Posts/Posts";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import './Profile.scss';

const Profile = (props) => {
    return (
        <div className="profile">
            <ProfileInfo/>
            <Posts
                postList={props.profilePage.postList}
                dispatch={props.dispatch}
                newPostText={props.profilePage.newPostText}
            />
        </div>
    )
}

export default Profile