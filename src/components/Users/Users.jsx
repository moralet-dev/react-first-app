import React from "react";
import s from "./Users.module.css";
import UserItem from "./UserItem/UserItem";


const Users = (props) => {
    let pagesCount = Math.ceil((props.totalCount / props.pageSize))

    let pages = []
    for (let i = 1; i <= 30; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div className="">
                {pages.map(p => <button className={props.currentPage === p ? s.selected_page : ''}
                                        onClick={() => {
                                            props.onPageChanged(p)
                                        }}>{p}</button>)
                }
            </div>
            {props.users.map(u => <div key={u.id}>
                {u.followed
                    ? <button onClick={() => {
                        props.onUnfollow(u.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        props.onFollow(u.id)
                    }}>Follow</button>
                }
                <UserItem user={u}/>
            </div>)}
        </div>
    )
}
export default Users