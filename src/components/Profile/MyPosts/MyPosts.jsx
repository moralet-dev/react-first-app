import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";


const NewPostForm = (props) => {

    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div className="">
                <Field component={'textarea'} name={'newPostText'}/>
            </div>
            <div className="">
                <button>Add post</button>
            </div>
        </form>
    )
}

const NewPostReduxForm = reduxForm({form: 'newPost'})(NewPostForm)

const MyPosts = (props) => {

    let postsElements = props.posts.map((p) => <Post message={p.msg} likesCount={p.likesCount}/>)

    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <div>
                <h4>New post</h4>
                <NewPostReduxForm onSubmit={props.addPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts