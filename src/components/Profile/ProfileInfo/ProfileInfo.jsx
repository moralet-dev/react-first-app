import React from "react"
import s from './ProfileInfo.module.css'
import user_icon from '../../../assets/images/user-icon.png'
import ProfileStatus from'./ProfileStatus'
import Preloader from "../../common/Preloader/Preloader";

function ProfileInfo(props) {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div className={s.profile_info_block}>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
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