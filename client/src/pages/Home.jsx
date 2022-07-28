import React, { useState, useEffect } from 'react'
// import { Route, Routes } from 'react-router-dom'
import Newsfeed from '../components/Newsfeed'
import axios from 'axios'

const Home = (props) => {
  let n = props.users.length

  useEffect(() => {
    props.setCurrentUser(props.users[props.users.length - 1])
  }, [n])

  return (
    <div className="home">
      <div className="home-title">
        <h1>Newsfeed</h1>
      </div>
      <Newsfeed
        users={props.users}
        posts={props.posts}
        comments={props.comments}
        setPosts={props.setPosts}
        setComments={props.setComments}
        currentUser={props.currentUser}
      />
    </div>
  )
}

export default Home
