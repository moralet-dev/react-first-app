import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalCount,
    setUsers,
    unfollow
} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {
                withCredentials:true,
            }).then(
            response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            }
        )
    }

    onPageChanged = (p) => {
        this.props.setIsFetching(true)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`,
            {
                withCredentials:true,
            }).then(
            response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
            }
        )
        this.props.setCurrentPage(p)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     // return {
//     //     follow: (userId) => {
//     //         dispatch(followAC(userId))
//     //     },
//     //     unfollow: (userId) => {
//     //         dispatch(unfollowAC(userId))
//     //     },
//     //     setUsers: (users) => {
//     //         dispatch(setUsersAC(users))
//     //     },
//     //     setCurrentPage: (currentPage) => {
//     //         dispatch(setCurrentPageAC(currentPage))
//     //     },
//     //     setTotalCount: (count) => {
//     //         dispatch(setTotalCountAC(count))
//     //     },
//     //     toggleIsFetching: (isFetching) => {
//     //         dispatch(setIsFetching(isFetching))
//     //     }
//     // }
//     return {
//         follow: followAC,
//         unfollow: unfollowAC,
//         setUsers: setUsersAC,
//         setCurrentPage: setCurrentPageAC,
//         setTotalCount: setTotalCountAC,
//         toggleIsFetching: setIsFetching,
//     }
// }


export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalCount, setIsFetching,})(UsersContainer)

