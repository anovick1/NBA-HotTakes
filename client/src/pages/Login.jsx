import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  let navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [name, setName] = useState('')

  const changeUsername = (event) => {
    let n = event.target.value
    setUsername(n)
  }
  const changeName = (event) => {
    let n = event.target.value
    setName(n)
  }
  const handleSubmit = (e) => {
    addUser(e)
    navigate(`/home`)
  }
  const addUser = async (e) => {
    await axios.post('http://localhost:3001/user', {
      id: '',
      username: username,
      name: name,
      bio: 'I know all',
      pfp: 'https://i.pinimg.com/originals/5a/f6/e8/5af6e8fdba154c495077521be072da2b.jpg',
      tweets: []
    })
    props.setCurrentUser({
      id: '',
      username: username,
      name: name,
      bio: 'I know all',
      pfp: 'https://i.pinimg.com/originals/5a/f6/e8/5af6e8fdba154c495077521be072da2b.jpg',
      tweets: []
    })
    let update = props.users
    update.push(props.currentUser)
    props.setUsers(update)
  }
  return (
    <div className="login-page">
      <div className="form">
        <h1>Welcome to NBA Hot Takes</h1>
        <p>A social media dedicated to NBA hot takes!</p>
        <div className="input-div">
          <form onSubmit={handleSubmit}>
            <div className="login-form">
              <input
                type="text"
                value={name}
                onChange={changeName}
                name={'name'}
                placeholder={'Name'}
                className="input-box"
                id="name-input"
              />
              <input
                type="text"
                value={username}
                onChange={changeUsername}
                name={'Username'}
                placeholder={'Username'}
                className="input-box"
                id="username-input"
              />
              <button id="form-submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login
