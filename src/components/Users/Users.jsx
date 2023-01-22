import React from "react";
import UserItem from "./UserItem/UserItem";
import axios from "axios";

const Users = (props) => {
    if (props.users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(
            response => {
                props.setUsers(response.data.items)
            }
        )
    }
    return (
        <div>
            {props.users.map(u => <div>
                {u.followed
                    ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>
                    : <button onClick={ () => {props.follow(u.id)} }>Follow</button>
                }
                <UserItem user={u}/>
            </div>)}
        </div>
    )
}

export default Users