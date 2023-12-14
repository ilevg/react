import React, { useState } from 'react'
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter'
import PostList from './components/PostList'



import './styles/App.css'
import PostForm from './components/PostForm';

function App() { 
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', description: 'Program lang'},
        {id: 2, title: 'JavaScript 2', description: 'Program lang'},
        {id: 3, title: 'JavaScript 3', description: 'Program lang'},
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    return (
        <div className="App">
            <ClassCounter/>
            <Counter/>
            <PostList posts={posts} title='Posts about languages'/>
            <PostForm create={createPost} />
        </div>
    );
}

export default App;
