import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsElements = props.state.posts.map((p) => <Post message={p.msg} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef()
    let onPostTextChange = () => {
        let newMessage = newPostElement.current.value
        props.dispatch({type: 'NEW-POST-MESSAGE', newText: newMessage})

    }
    let addPost = () => {
        props.dispatch({type:'ADD-NEW-POST'})
    }
    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <div>
                <h4>New post</h4>

                <div className="">
                    <textarea ref={newPostElement} value={props.state.newPostText} onChange={onPostTextChange} />
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