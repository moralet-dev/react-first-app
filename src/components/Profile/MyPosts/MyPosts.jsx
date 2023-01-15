import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {
    let posts = [
        {id: '1', msg: 'Hi!', likesCount: '2'},
        {id: '1', msg: 'Hello!', likesCount: '22'},
        {id: '1', msg: 'How are you?', likesCount: '68'},
    ]
    let postsElements = posts.map((p) => <Post message={p.msg} likesCount={p.likesCount}/>)

    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <div>
                <h4>New post</h4>
                <div className=""><textarea></textarea></div>
                <div className="">
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts