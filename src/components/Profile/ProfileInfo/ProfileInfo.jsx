import React from "react"
import s from './ProfileInfo.module.css'
import user_icon from '../../../assets/images/user-icon.png'
import ProfileStatus from'./ProfileStatus'

function ProfileInfo(props) {
    return (
        <div className={s.profile_info_block}>
            {/*<div className={s.content_banner}>*/}
            {/*    <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' alt=''/>*/}
            {/*</div>*/}
            {/*<ProgileStatus/>*/}
            <div className={s.profile_photo}>
                {props.profile && props.profile.photos.small
                    ? <img src={props.profile.photos.small} alt={'Nothing:('}/>
                    : <img src={user_icon} alt=""/>}
            </div>
            <div className={s.description}>
                <p>{props.profile && props.profile.aboutMe ? props.profile.aboutMe : 'Description empty'}</p>
                <p>{props.profile && props.profile.fullName ? props.profile.fullName : 'Empty fullname'}</p>
            </div>
        </div>
    )
}

export default ProfileInfo