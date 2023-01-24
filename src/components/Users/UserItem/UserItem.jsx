import React from "react";
import s from './UserItem.module.css'
import user_img from '../../../assets/images/user-icon.png'
import {NavLink} from "react-router-dom";
const UserItem = (props) => {
    return (
        <div>
            <div className={s.user_container}>
                <div className="">
                    <NavLink to={`/profile/${props.user.id}`}>
                        <img src={props.user.photos.small ? props.user.photos.small : user_img} alt=""/>
                    </NavLink>
                    </div>
                <div className="">{props.user.name}</div>
                <span>{props.user.status ? props.user.status.toString() : 'Nothing'}</span>
            </div>
        </div>
    )
}

export default UserItem