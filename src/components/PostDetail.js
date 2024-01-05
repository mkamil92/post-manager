import React from 'react'
const PostDetail = ({ post }) => {
  return (
    <div className="container mt-4">
      <h1 className='text-success text-center'>Welcome! Posts Details Page</h1>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}
export default PostDetail
