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
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(
            response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.items)
                this.props.setTotalCount(response.totalCount)
            }
        )
    }

    onPageChanged = (p) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(p)

        usersAPI.getUsers(p, this.props.pageSize).then(
            response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.items)
            }
        )
    }

    onUnfollow = (id) => {
        usersAPI.willUnfollow(id).then(response => {
                if (response.data.resultCode === 0) {
                    this.props.unfollow(id)
                }
            }
        )
    }
    onFollow = (id) => {
        usersAPI.willFollow(id).then(response => {
                if (response.data.resultCode === 0) {
                    this.props.follow(id)
                }
            }
        )
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
                onUnfollow={this.onUnfollow}
                onFollow={this.onFollow}
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

export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalCount, setIsFetching,})(UsersContainer)

