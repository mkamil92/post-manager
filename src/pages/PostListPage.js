import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from '../components/PostList';
import Pagination from '../components/Pagination';

const PostListPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    };

    fetchPosts();
  }, []);

  const handleBookmark = (postId) => {
    const bookmarkedPosts = JSON.parse(localStorage.getItem('bookmarkedPosts')) || [];
    const postToAdd = posts.find((post) => post.id === postId);

    if (postToAdd && !bookmarkedPosts.some((p) => p.id === postId)) {
      bookmarkedPosts.push(postToAdd);
      localStorage.setItem('bookmarkedPosts', JSON.stringify(bookmarkedPosts));
    }
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-4">
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search Posts by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <PostList posts={currentPosts} handleBookmark={handleBookmark} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filteredPosts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  )
}
export default PostListPage
