import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {

    let postsElements = props.posts.map((p) => <Post message={p.msg} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef()

    let updateNewPostText = () => {
        let text = newPostElement.current.value
        props.onPostTextChange(text)
    }
    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <div>
                <h4>New post</h4>

                <div className="">
                    <textarea ref={newPostElement} value={props.newPostText} onChange={updateNewPostText}/>
                </div>
                <div className="">
                    <button onClick={props.addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts