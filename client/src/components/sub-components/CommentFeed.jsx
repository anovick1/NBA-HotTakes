import React from 'react'
import Likes from './Likes'
import CommentForm from '../CommentForm'

const Comment = (props) => {
  // console.log(props.currentUser)
  const checkCurrentUser = (user) => {
    if (user === props.currentUser._id) {
      return <div className="delete-comment">❌</div>
    }
  }
  return (
    <div className="comments">
      {props.comments
        .filter((c) => c.post === props.id)
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
              currentUser={props.currentUser._id}
            />
            {checkCurrentUser(comment.user)}
          </div>
        ))}
      <div>
        <CommentForm
          postid={props.id}
          currentUser={props.currentUser}
          showPost1={props.showPost}
          posts={props.posts}
          users={props.users}
          setCurrentUser={props.setCurrentUser}
          setComments={props.setComments}
          comments={props.comments}
        />
      </div>
    </div>
  )
}

export default Comment
