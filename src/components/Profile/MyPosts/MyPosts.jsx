import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {
    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <div>
                <h4>New post</h4>
                <div className=""><textarea></textarea></div>
                <div className=""><button>Add post</button></div>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' />
                <Post message="it's my first post"/>
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts