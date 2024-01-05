import React from 'react'
import Bookmarks from '../components/Bookmarks'
const BookmarksPage = () => {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarkedPosts')) || []
  return (
    <div className="container mt-4">
      <h2>Bookmarked Posts</h2>
      {bookmarks.length === 0 ? (
        <p>No bookmarks available. Bookmark some posts from the Post List.</p>
      ) : (
        <Bookmarks bookmarks={bookmarks} />
      )}
    </div>
  )
}
export default BookmarksPage
