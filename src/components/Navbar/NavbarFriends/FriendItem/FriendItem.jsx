import React from "react";
import s from '../NavbarFriends.module.css'

const FriendItem = (props) => {
    return (
        <div className={s.wrapper_bottom_firend}>
            <div className={s.friend_image}></div>
            {props.name}
        </div>
    )

};
export default FriendItem