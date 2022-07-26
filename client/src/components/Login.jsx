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
      bio: '',
      pfp: 'https://i.pinimg.com/originals/5a/f6/e8/5af6e8fdba154c495077521be072da2b.jpg'
    })
    props.setCurrentUser({
      id: '',
      username: username,
      name: name,
      bio: '',
      pfp: 'https://i.pinimg.com/originals/5a/f6/e8/5af6e8fdba154c495077521be072da2b.jpg'
    })
    let update = props.users
    update.push(props.currentUser)
    props.setUsers(update)
  }
  return (
    <div className="form">
      <h1>Please enter the info to enter</h1>
      <div className="input-div">
        <form onSubmit={handleSubmit}>
          <div className="name-town-date">
            <input
              type="text"
              value={username}
              onChange={changeUsername}
              name={'Username'}
              placeholder={'Username'}
            />
            <input
              type="text"
              value={name}
              onChange={changeName}
              name={'name'}
              placeholder={'name'}
            />
            <button id="form-submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login
