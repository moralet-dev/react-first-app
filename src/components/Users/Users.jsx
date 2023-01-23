import React from "react";
import s from "./Users.module.css";
import UserItem from "./UserItem/UserItem";


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
                        props.unfollow(u.id)
                    }}>Unfollow</button> : <button onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>
                }
                <UserItem user={u}/>
            </div>)}
        </div>
    )
}
export default Users