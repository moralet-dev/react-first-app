import React from "react"
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile() {
    return (
        <div>
            <div className={s.content_banner}>
                <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' alt=''/>
            </div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile