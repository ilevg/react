import React from 'react'
import Post from './Post'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
const PostList = function({posts, title, remove}) {
    if(!posts.length) {
        return (
            <div style={{color:'red', fontSize:'30px', textAlign:'center', margin:'30px 0'}}>
                Posts not found!
            </div>
        )
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <TransitionGroup>
            
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames='post'
                    >
                        <Post remove={remove} number={index +1} post={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}

export default PostList