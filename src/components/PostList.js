import React from 'react'
import { Link } from 'react-router-dom'
const PostList = ({ posts, handleBookmark }) => {
  const showAlert = () => {
    alert('Post bookmarked successfully!');
  };
  return (
    <div className="container mt-4">
      <h2 className='mx-5'>Welcome to Post manager</h2>
      {posts.map((post) => (
        <div key={post.id} className="card my-3">
          <div className="card-body">
            <h3 className="card-title">{post.title}</h3>
            <p className="card-text">
              {post.body.length > 40 ? `${post.body.substring(0, 40)}...` : post.body}
            </p>
            <Link to={`/${post.id}`} className="btn btn-primary">
              Read More
            </Link>
            <button className="btn btn-outline-secondary ml-2 mx-3" onClick={() => {handleBookmark(post.id); showAlert();}}>
              Bookmark
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default PostList
