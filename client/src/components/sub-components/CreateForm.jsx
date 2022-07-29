import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateForm = (props) => {
  let navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [video, setVideo] = useState('')
  const [valid, setValid] = useState(false)

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
    if (title.length > 0 && video.length > 0 && text.length > 0) {
      setValid(true)
      addPost(e)
      props.setDone(true)
    } else {
      props.setDone(true)
    }
    props.setDone(true)
  }
  const goHome = async (e) => {
    navigate(`/home`)
    props.setDone(false)
  }
  const goCreate = async (e) => {
    props.setDone(false)
  }

  const tryAgain = () => {
    props.setDone(false)
  }

  const current = new Date()
  const date = `${
    current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()}`

  const addPost = async (e) => {
    await axios.post('/post', {
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
    setTitle('')
    setText('')
    setVideo('')
  }

  const displayForm = () => {
    if (!props.done) {
      return (
        <div className="form" id="create-form">
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
    } else if (props.done && valid) {
      return (
        <div className="form" id="create-form">
          <h1>Post Successful!</h1>
          <p>You can view your post in your profile or at the home screen</p>
          <div className="buttons">
            <div>
              <button id="form-submit-2" onClick={() => goHome()}>
                Home
              </button>
            </div>
            <div>
              <button id="form-submit-2" onClick={() => goCreate()}>
                Create Another Post
              </button>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="form" id="create-form">
          <h1>Post Unsuccessful!</h1>
          <p>
            There was a problem with your post. Make sure to fill out all the
            information in correctly
          </p>
          <div className="buttons">
            <div>
              <button id="form-submit" onClick={() => tryAgain()}>
                Try Again
              </button>
            </div>
          </div>
        </div>
      )
    }
  }

  return <div>{displayForm()}</div>
}

export default CreateForm
