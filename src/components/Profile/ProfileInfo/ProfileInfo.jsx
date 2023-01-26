import React from "react"
import s from './ProfileInfo.module.css'
import user_icon from '../../../assets/images/user-icon.png'

function ProfileInfo(props) {
    return (
        <div className={s.profile_info_block}>
            <div className={s.content_banner}>
                <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' alt=''/>
            </div>
            <div className={s.profile_photo}>
                {props.profile.photos.small ? <img src={props.profile.photos.small} alt={'Nothing:('}/> : <img src={user_icon} alt=""/>}
            </div>
            <div className={s.description}>
                {props.profile ? props.profile.aboutMe : ''}
                {props.profile ? props.profile.fullName : ''}
            </div>
        </div>
    )
}

export default ProfileInfo