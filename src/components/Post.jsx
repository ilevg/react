import React from "react";

const Post = function(props) {
    return (
        <div className='post'>
            <div className='post__content' >
                <strong>{props.number}. {props.post.title}</strong>
                <div>{props.post.description}</div>
            </div>
                <div className='post__btn'>
                <button>Remove</button>
            </div>
        </div>
    )
}

export default Post