import React from 'react'
import {addPostCreator, newPostTextCreator} from "../../../NotRedux/store";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";


const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState().profilePage

                let onPostTextChange = (text) => {
                    let action = newPostTextCreator(text)
                    store.dispatch(action)
                }
                let addPost = () => {
                    store.dispatch(addPostCreator())
                }

                return (<MyPosts onPostTextChange={onPostTextChange}
                         posts={state.posts}
                         newPostText={state.newPostText}
                         addPost={addPost}/>)
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer