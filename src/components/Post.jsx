import React from 'react'
import MyButton from '../UI/buttons/MyButton'
import { useNavigate } from 'react-router-dom'

const Post = function(props) {
    const router = useNavigate()
    return (
        <div className='post'>
            <div className='post__content' >
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>{props.post.description}</div>
            </div>
            <div className='post__btn'>
                <MyButton onClick={() => router(`/posts/${props.post.id}`)}>
                    Open
                </MyButton>
                <MyButton onClick={() => props.remove(props.post)}>
                    Remove
                </MyButton>
            </div>
        </div>
    )
}

export default Post