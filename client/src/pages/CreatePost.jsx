import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = (props) => {
  let navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  // const [image, setImage] = useState('')
  const [video, setVideo] = useState('')
  const [newPost, setNewPost] = useState({
    user: props.currentUser._id,
    title: title,
    date: props.currentUser.createdAt,
    text: text,
    video: video,
    likes: '0'
  })

  const changeTitle = (event) => {
    let n = event.target.value
    setTitle(n)
  }
  const changeText = (event) => {
    let n = event.target.value
    setText(n)
  }
  // const changeImage = (event) => {
  //   let n = event.target.value
  //   setImage(n)
  // }
  const changeVideo = (event) => {
    let n = event.target.value
    setVideo(n)
  }
  const handleSubmit = (e) => {
    addPost(e)
    navigate(`/home`)
  }
  const addPost = async (e) => {
    await axios.post('http://localhost:3001/post', {
      user: props.currentUser._id,
      title: title,
      date: props.currentUser.createdAt,
      text: text,
      video: video,
      likes: '0'
    })
    setNewPost({
      user: props.currentUser._id,
      title: title,
      date: props.currentUser.createdAt,
      text: text,
      video: video,
      likes: ''
    })
    let update = props.posts
    update.push(newPost)
    props.setPosts(update)
  }
  console.log(props.posts)
  return (
    <div className="login-page">
      <div className="form">
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
                placeholder={'Past youtube video link'}
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
    </div>
  )
}

export default CreatePost
