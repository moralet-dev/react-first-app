import React from "react"
import MyPosts from "./MyPosts/MyPosts"
import s from './Profile.module.css'

function Profile() {
    return (
        <div className={s.content}>
            <div className={s.content_banner}>
                <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' />
            </div>
            <div>
                <img src='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg' />
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile