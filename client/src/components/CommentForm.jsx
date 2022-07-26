import React, { useState } from 'react'
import axios from 'axios'

const CommentForm = (props) => {
  const [text, setText] = useState('')
  const [date, setDate] = useState('')
  const [likes, setLikes] = useState('')

  const addComment = async (e) => {
    await axios.post('http://localhost:3001/comments/:id' + props.id, {
      post: props.postid,
      user: props.currentUser.username,
      date: '',
      text: '',
      likes: '0'
    })
  }

  const changeText = (event) => {
    let n = event.target.value
    setText(n)
  }
  // const changeLikes = (event) => {
  //   let n = event.target.value
  //   setLikes(n)
  // }

  return (
    <div className="comment-new">
      <div className="pfp-username">
        <div className="comment-pfp">
          <img src={props.currentUser.pfp} alt="commenter-pfp" />
        </div>
        <div
          onClick={() => props.showPost1(props.currentUser.username)}
          className="comment-username"
        >
          {props.currentUser.username}:
        </div>
      </div>
      <div className="comment-form">
        <form>
          <textarea
            type="text-area"
            value={text}
            onChange={changeText}
            name={'text'}
            placeholder={'write comment here'}
            className="write"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CommentForm
