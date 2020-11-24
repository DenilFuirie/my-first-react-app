import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
    <div className={s.item}>
        <img src='https://i0.pngocean.com/files/442/17/110/computer-icons-user-profile-male-user.jpg' />
        {props.message}
        <span>| like {props.likesCount}</span>
            </div>
    )
}

export default Post