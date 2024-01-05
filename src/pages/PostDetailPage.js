import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import PostDetail from '../components/PostDetail'

const PostDetailPage = () => {
  const { id } = useParams()
  const [post, setPost] = useState({})
  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      setPost(response.data);
    };
    fetchPost();
  }, [id]);

  return (
    <div>
      <PostDetail post={post} />
    </div>
  )
}
export default PostDetailPage
