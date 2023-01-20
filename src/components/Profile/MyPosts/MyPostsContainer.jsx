import React from 'react'
import {addPostCreator, newPostTextCreator} from "../../../NotRedux/store";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let state = props.store.getState().profilePage

    let onPostTextChange = (text) => {
        let action = newPostTextCreator(text)
        props.store.dispatch(action)
    }
    let addPost = () => {
        props.store.dispatch(addPostCreator())
    }
    return (
        <MyPosts onPostTextChange={onPostTextChange}
                 posts={state.posts}
                 newPostText={state.newPostText}
                 addPost={addPost}/>
    )
}

export default MyPostsContainer