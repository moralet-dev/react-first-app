import React from "react";
import s from './UserItem.module.css'
const UserItem = (props) => {
    return (
        <div>
            <div className={s.user_container}>
                <div className="">{props.user.fullName}</div>
            </div>
        </div>
    )
}

export default UserItem