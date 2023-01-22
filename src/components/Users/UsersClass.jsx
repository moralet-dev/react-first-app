import React from "react";
import UserItem from "./UserItem/UserItem";
import axios from "axios";

class User extends React.Component {
    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(
            response => {
                this.props.setUsers(response.data.items)
            }
        )
    }

    render() {
        return (<div>
            {this.props.users.map(u => <div>
                {u.followed
                    ? <button onClick={() => {
                        this.props.unfollow(u.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        this.props.follow(u.id)
                    }}>Follow</button>
                }
                <UserItem user={u}/>
            </div>)}
        </div>)
    }

}

export default User