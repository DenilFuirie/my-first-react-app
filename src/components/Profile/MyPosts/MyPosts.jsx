import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: '12'},
        {id: 2, message: 'Where are you been?', likesCount: 11},
        {id: 3, message: 'Can you send me your number?', likesCount: 15},
        {id: 4, message: 'I want a pizza', likesCount: 100},
        {id: 4, message: 'I want a pizza', likesCount: 100},
        {id: 4, message: 'I want a pizza', likesCount: 100},
        {id: 4, message: 'I want a pizza', likesCount: 100},
        {id: 4, message: 'I want a pizza', likesCount: 100},
        {id: 4, message: 'I want a pizza', likesCount: 100},

    ]

    let postsElements = posts.map((post) => <Post message={post.message} likesCount={post.likesCount}/>)

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts