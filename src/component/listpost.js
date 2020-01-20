import React from 'react'

export default function listpost({post}) {
    return (
        <div>
           <p>{post.title}</p>
           <p>{post.body}</p>
 
        </div>
    )
}

