import React from "react"
import MyPosts from "./MyPosts/MyPosts"
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div>
            <div className={s.content_banner}>
                <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' alt=''/>
            </div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile