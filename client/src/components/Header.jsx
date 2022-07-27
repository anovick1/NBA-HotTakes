import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

const Header = (props) => {
  return (
    <header>
      <nav>
        <div className="logout-nav">
          <Link to="/">Logout</Link>
        </div>
        <div className="home-nav">
          <Link to="/home">Home</Link>
        </div>
        <div className="user-nav">
          <Link
            to={'/home/' + props.currentUser.username}
            className="user-profile"
          >
            <div id="pfp">
              <img src={props.currentUser.pfp} alt="pfp" />
            </div>
            <div id="username">{props.currentUser.username}</div>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
