import React from "react";
import s from "./Users.module.css";
import UserItem from "./UserItem/UserItem";
import axios from "axios";


const Users = (props) => {
    let pagesCount = Math.ceil((props.totalCount / props.pageSize))

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div className="">
                {pages.map(p =>
                    <button
                        className={props.currentPage === p ? s.selected_page : ''}
                        onClick={(e) => {
                            props.onPageChanged(p)
                        }}
                    >{p}</button>
                )}
            </div>
            {props.users.map(u => <div key={u.id}>
                {u.followed
                    ? <button onClick={() => {
                        axios.delete(
                            `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                            {withCredentials:true}
                        ).then(response => {
                            if (response.data.resultCode === 0){
                                props.unfollow(u.id)
                            }
                        })
                    }}>Unfollow</button> : <button onClick={() => {
                        axios.post(
                            `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                            null,
                            {withCredentials:true}
                        ).then(response => {
                            if (response.data.resultCode === 0){
                                props.follow(u.id);
                            }
                        })
                    }}>Follow</button>
                }
                <UserItem user={u}/>
            </div>)}
        </div>
    )
}
export default Users