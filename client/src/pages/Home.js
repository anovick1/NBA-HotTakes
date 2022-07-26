import React, { useState, useEffect } from 'react'
// import { Route, Routes } from 'react-router-dom'
import Post from '../components/Post'
import axios from 'axios'

const Home = (props) => {
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const response = await axios.get('http://localhost:3001/users')
  //     props.setUsers(response.data)
  //   }
  //   getUsers()
  // }, [])
  let update = props.users
  update.push(props.currentUser)
  props.setUsers(update)
  let l = props.users.length - 1
  return (
    <div>
      <h1>Newsfeed</h1>
      <Post
        users={props.users}
        posts={props.posts}
        comments={props.comments}
        setPosts={props.setPosts}
        setComments={props.setComments}
        currentUser={props.users[l]}
      />
    </div>
  )
}

export default Home
