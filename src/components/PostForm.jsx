import React, { useState } from 'react'
import MyButton from '../UI/buttons/MyButton'
import MyInput from '../UI/inputs/MyInput'

const PostForm = function({create}) {
    const [post, setPost] = useState({title: '', description: ''})
    
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', description: ''})
    }
    return (
        <form>
            <p style={{textAlign: 'center'}}>Add post:</p>
            {/* Controlled Component */}
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type='text'
                placeholder='Post name'>
            </MyInput>
            <MyInput
                value={post.description}
                onChange={e => setPost({...post, description: e.target.value})}
                type="text" 
                placeholder='Post description'>
            </MyInput>
            <MyButton onClick={addNewPost}>Create</MyButton>
        </form>
    )
}

export default PostForm