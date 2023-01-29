import React from 'react'
import {addPost, } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPost) => dispatch(addPost(newPost)),
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer