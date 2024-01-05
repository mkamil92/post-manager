import React from 'react'
const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="container mt-4">
     
      {bookmarks.map((post) => (
        <div key={post.id} className="card my-3">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Bookmarks