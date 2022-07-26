import React from 'react'
import { useNavigate } from 'react-router-dom'
import Likes from './Likes'

const CommentsByUser = (props) => {
  let navigate = useNavigate()

  const showPost = (user) => {
    navigate(`/home/${user}`)
  }
  return (
    <div className="comments">
      {props.comments
        .filter((c) => c.user === props.id)
        .map((comment) => (
          <div className="comment" key={comment._id}>
            {props.users
              .filter((u) => u._id === comment.user)
              .map((user) => (
                <div className="pfp-username">
                  <div className="comment-pfp">
                    <img src={user.pfp} alt="commenter-pfp" />
                  </div>
                  <div
                    onClick={() => showPost(user.username)}
                    className="comment-username"
                  >
                    @{user.username}:
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
        ))}
    </div>
  )
}

export default CommentsByUser
