import React from "react";
import UserItem from "./UserItem/UserItem";

const Users = (props) => {
    let users = [
        {
            id: 1,
            fullName: 'John Doe',
            isFollowed: true,
            status: 'Hello!',
            location: {city: 'London', country: 'England'}
        },
        {
            id: 2,
            fullName: 'Bill Bowl',
            isFollowed: false,
            status: 'Hello!',
            location: {city: 'New York', country: 'US'}
        },
        {
            id: 3,
            fullName: 'Ashley Williams',
            isFollowed: false,
            status: 'Hello!',
            location: {city: 'Madrid', country: 'Spain'}
        },
        {
            id: 4,
            fullName: 'Paul Smith',
            isFollowed: true,
            status: 'Hello!',
            location: {city: 'Affine', country: 'Greece'}
        },
    ]
    if (props.users.length === 0){
        props.setUsers(users)
    }
    let onFollowClick = () => {
        let userId
        props.follow(userId)
    }
    return (
        <div>
            {props.users.map(u => <div>
                {u.isFollowed
                    ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>
                    : <button onClick={ () => {props.follow(u.id)} }>Follow</button>
                }
                <UserItem user={u}/>
            </div>)}
        </div>
    )
}

export default Users