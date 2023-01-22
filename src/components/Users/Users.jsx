import React from "react";
import UserItem from "./UserItem/UserItem";
import axios from "axios";
import s from './Users.module.css'


class User extends React.Component {
    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(
            response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            }
        )
    }
    onPageChanged = (p) =>{
        this.props.setCurrentPage(p)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(
            response => {
                this.props.setUsers(response.data.items)

            }
        )
    }
    render() {
        let pagesCount = Math.ceil((this.props.totalCount / this.props.pageSize))

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (<div>
            <div className="">
                {pages.map(p =>
                    <button
                        className={this.props.currentPage === p ? s.selected_page : ''}
                        onClick={(e) => {this.onPageChanged(p)}}
                    >{p}</button>
                )}

                <span></span>
                <span></span>
                <span></span>
                <span></span></div>
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