import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateForm = (props) => {
  let navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [video, setVideo] = useState('')

  const changeTitle = (event) => {
    let n = event.target.value
    setTitle(n)
  }
  const changeText = (event) => {
    let n = event.target.value
    setText(n)
  }

  const changeVideo = (event) => {
    let n = event.target.value
    setVideo(n)
  }
  const handleSubmit = async (e) => {
    addPost(e)
    navigate(`/home`)
  }
  const current = new Date()
  const date = `${
    current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()}`

  const addPost = async (e) => {
    await axios.post('http://localhost:3001/post', {
      user: props.currentUser._id,
      title: title,
      date: date,
      text: text,
      video: video,
      likes: '0'
    })
    props.setNewPost({
      user: props.currentUser._id,
      title: title,
      date: date,
      text: text,
      video: video,
      likes: ''
    })
    let update = props.posts
    update.push(props.newPost)
    props.setPosts(update)
  }
  return (
    <div className="form id" id="create-form">
      <h1>Create a post!</h1>
      <p>Please fill out the form below</p>
      <div className="input-div">
        <form onSubmit={handleSubmit}>
          <div className="login-form">
            <input
              type="text"
              value={title}
              onChange={changeTitle}
              name={'title'}
              placeholder={'Title'}
              className="input-box"
              id="name-input"
            />
            <input
              type="text"
              value={video}
              onChange={changeVideo}
              name={'video'}
              placeholder={'Paste youtube video link'}
              className="input-box"
              id="name-input"
            />
            <textarea
              type="text-area"
              value={text}
              onChange={changeText}
              name={'caption'}
              placeholder={'Write a caption'}
              className="create-caption"
            />
            <button id="form-submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateForm
