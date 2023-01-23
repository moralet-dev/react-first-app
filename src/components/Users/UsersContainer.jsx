import React from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";


class UsersContainer extends React.Component {
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
        return <Users
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users)=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCount: (count) => {
            dispatch(setTotalCountAC(count))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

