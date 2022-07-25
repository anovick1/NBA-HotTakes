import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Post from '../components/Post'

const Home = (props) => {
  return (
    <div>
      <h1>Newsfeed</h1>
      <Post
        users={props.users}
        posts={props.posts}
        comments={props.comments}
        setPosts={props.setPosts}
        setComments={props.setComments}
      />
    </div>
  )
}

export default Home
