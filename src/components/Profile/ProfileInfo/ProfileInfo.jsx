import React from "react"
import s from './ProfileInfo.module.css'

function ProfileInfo() {
    return (
        <div className={s.profile_info_block}>
            <div className={s.profile_photo}>
                <img
                    src='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg'/>
            </div>
            <div className={s.description}>
                descr
            </div>
        </div>
    )
}

export default ProfileInfo