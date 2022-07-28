import './styles/App.css'
import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login.jsx'
import ProfileDetails from './pages/ProfileDetails'
import CreatePost from './pages/CreatePost'
import axios from 'axios'
import Header from './components/Header'

const App = () => {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const [currentUser, setCurrentUser] = useState({
    id: '',
    username: '',
    name: '',
    pfp: '',
    tweets: []
  })
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get('http://localhost:3001/users')
      setUsers(response.data)
    }
    getUsers()
  }, [currentUser])
  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get('http://localhost:3001/posts')
      setPosts(response.data)
    }
    getPosts()
  }, [])
  useEffect(() => {
    const getComments = async () => {
      const response = await axios.get('http://localhost:3001/comments')
      setComments(response.data)
    }
    getComments()
  }, [])

  return (
    <div>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Login
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                users={users}
                setUsers={setUsers}
              />
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Header
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  users={users}
                />
                <Home
                  users={users}
                  posts={posts}
                  setUsers={setUsers}
                  comments={comments}
                  setPosts={setPosts}
                  setComments={setComments}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                />
              </>
            }
          />

          <Route
            path="/create-post"
            element={
              <>
                <Header
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  users={users}
                />
                <CreatePost
                  currentUser={currentUser}
                  posts={posts}
                  setPosts={setPosts}
                />
              </>
            }
          />

          <Route
            path="/home/:username"
            element={
              <>
                <Header
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                />
                <ProfileDetails
                  users={users}
                  posts={posts}
                  comments={comments}
                  setPosts={setPosts}
                  setComments={setComments}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                />
              </>
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
