import React, { useState } from 'react'
import axios from 'axios'

const CommentForm = (props) => {
  const [text, setText] = useState('')

  const addComment = async (e) => {
    e.preventDefault()

    await axios.post('/comments/' + props.postid, {
      post: props.postid,
      user: props.currentUser._id,
      date: '',
      text: text,
      likes: '0'
    })

    const getComments = async () => {
      const response = await axios.get('/comments')
      props.setComments(response.data)
    }
    getComments()
    setText('')
  }

  const changeText = (event) => {
    let n = event.target.value
    setText(n)
  }

  return (
    <div className="comment-dislike">
      <div className="fake">❌</div>
      <div className="comment-new">
        <div className="pfp-username">
          <div className="comment-pfp">
            <img src={props.currentUser.pfp} alt="commenter-pfp" />
          </div>
          <div
            onClick={() => props.showPost1(props.currentUser.username)}
            className="comment-username"
          >
            <h4>
              @<span>{props.currentUser.username}</span>
            </h4>
          </div>
        </div>
        <form>
          <div className="comment-form">
            <textarea
              type="text-area"
              value={text}
              onChange={changeText}
              name={'text'}
              placeholder={'leave a comment...'}
              className="write"
            />
          </div>
        </form>
        <div className="comment-btn">
          <button onClick={addComment}>Submit</button>
        </div>
      </div>
      <div className="fake">❌</div>
    </div>
  )
}

export default CommentForm
