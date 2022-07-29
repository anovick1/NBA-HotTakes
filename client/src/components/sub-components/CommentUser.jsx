import React from 'react'
import Likes from './Likes'
import axios from 'axios'

const Comment = (props) => {
  const deleteComment = async (comment) => {
    await axios.delete('/comment/' + comment._id, {})

    const getComments = async () => {
      const response = await axios.get('/comments')
      props.setComments(response.data)
    }
    getComments()
  }

  const checkCurrentUser = (comment) => {
    if (comment.user === props.currentUser._id) {
      return (
        <div className="delete-comment" onClick={() => deleteComment(comment)}>
          ❌
        </div>
      )
    } else {
      return <div className="fake">❌</div>
    }
  }
  return (
    <div className="comments-user">
      {props.comments
        .filter((c) => c.user === props.id)
        .map((comment) => (
          <div className="comment-dislike" key={comment.text}>
            <div className="fake">❌</div>
            <div className="comment">
              {props.users
                .filter((u) => u._id === comment.user)
                .map((user) => (
                  <div className="pfp-username" key={user._id}>
                    <div className="comment-pfp">
                      <img src={user.pfp} alt="commenter-pfp" />
                    </div>
                    <div
                      onClick={() => props.showPost(user.username)}
                      className="comment-username"
                    >
                      <h4>
                        @<span>{user.username}</span>
                      </h4>
                    </div>
                  </div>
                ))}
              <div className="comment-text">{comment.text}</div>
              <Likes
                post={comment}
                comment={true}
                setComments={props.setComments}
              />
            </div>
            {checkCurrentUser(comment)}
          </div>
        ))}
    </div>
  )
}

export default Comment
