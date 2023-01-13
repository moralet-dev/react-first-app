import React from "react"
import cl from './Profile.module.css'

function Profile() {
    return (
        <div className={cl.content}>
            <div className={cl.content_banner}>
                <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' />
            </div>
            <div>
                <img src='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg' />
            </div>
            <div>
                My posts
                <div>
                    New posts
                </div>
            </div>

            <div className={cl.item}>Item</div>
            <div className={cl.item}>Item</div>
            <div className={cl.item}>Item</div>
            <div className={cl.item}>Item</div>
        </div>
    )
}

export default Profile