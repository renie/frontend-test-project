import React from 'react';
import './post.css'

const Post = ({post}) => {
  return (
    <li className="post">{post.title}</li>
  )
}

export default Post
