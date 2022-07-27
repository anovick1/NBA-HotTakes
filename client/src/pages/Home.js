import React, { useState, useEffect } from 'react'
// import { Route, Routes } from 'react-router-dom'
import Post from '../components/Post'
import axios from 'axios'

const Home = (props) => {
  useEffect(() => {
    props.setCurrentUser(props.users[props.users.length - 1])
  })
  console.log(props.currentUser)
  return (
    <div>
      <h1>Newsfeed</h1>
      <Post
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
