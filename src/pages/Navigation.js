import React from 'react'
import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link text-info m-3">
              Home
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/bookmarks" className="nav-link text-info m-3">
              Bookmarks Posts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navigation
