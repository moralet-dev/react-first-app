import React from 'react'
import s from './Post.module.css'

function Post(props) {
    let msg = props.message || 'Some message'
    return (
        <div className={s.item}>
            <img src="https://lumiere-a.akamaihd.net/v1/images/a_avatarpandorapedia_neytiri_16x9_1098_01_0e7d844a.jpeg?region=240%2C0%2C1440%2C1080" alt="" />
            <p>{msg}</p>
        </div>
    )
}

export default Post
