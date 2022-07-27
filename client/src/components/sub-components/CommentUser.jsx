import React from 'react'
import Likes from './Likes'

const Comment = (props) => {
  const checkCurrentUser = (user) => {
    if (user === props.currentUser._id) {
      return <div className="delete-comment">❌</div>
    } else {
      return <div className="fake">❌</div>
    }
  }
  return (
    <div className="comments-user">
      {props.comments
        .filter((c) => c.user === props.id)
        .map((comment) => (
          <div className="comment-dislike" key={comment._id}>
            <div className="fake">❌</div>
            <div className="comment">
              {props.users
                .filter((u) => u._id === comment.user)
                .map((user) => (
                  <div className="pfp-username" key={user.username}>
                    <div className="comment-pfp">
                      <img src={user.pfp} alt="commenter-pfp" />
                    </div>
                    <div
                      onClick={() => props.showPost(user.username)}
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
            {checkCurrentUser(comment.user)}
          </div>
        ))}
    </div>
  )
}

export default Comment
