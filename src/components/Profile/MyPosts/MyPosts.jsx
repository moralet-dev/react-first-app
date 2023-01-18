import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostActionCreator, newPostTextActionCreator} from "../../../NotRedux/state";


const MyPosts = (props) => {

    let postsElements = props.state.posts.map((p) => <Post message={p.msg} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef()
    let onPostTextChange = () => {
        let newText = newPostElement.current.value
        props.dispatch(newPostTextActionCreator(newText))
    }
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <div>
                <h4>New post</h4>

                <div className="">
                    <textarea ref={newPostElement} value={props.state.newPostText} onChange={onPostTextChange}/>
                </div>
                <div className="">
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts