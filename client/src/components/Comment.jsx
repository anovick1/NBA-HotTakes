import React from 'react'
import Likes from './Likes'

const Comment = (props) => {
  return (
    <div className="comments">
      {props.comments
        .filter((c) => c.user === props.id)
        .map((comment) => (
          <div className="comment" key={comment.text}>
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
        ))}
    </div>
  )
}

export default Comment
