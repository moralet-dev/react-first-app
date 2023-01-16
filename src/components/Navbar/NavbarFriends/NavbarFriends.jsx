import React from "react";
import s from './NavbarFriends.module.css'
import FriendItem from "./FriendItem/FriendItem";

const NavbarFriends = (props) => {
    return (
        <div className={s.wrapper}>
            <h4>Friends</h4>
            <div className={s.wrapper_bottom}>
                {props.firends.map((friend) => <FriendItem name={friend.name}/>)}
            </div>
        </div>
    )

};
export default NavbarFriends