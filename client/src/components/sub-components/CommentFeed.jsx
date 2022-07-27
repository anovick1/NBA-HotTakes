import React from 'react'
import Likes from './Likes'
import CommentForm from '../CommentForm'
import axios from 'axios'

const Comment = (props) => {
  const deleteComment = async (comment) => {
    await axios.delete('http://localhost:3001/comment/' + comment._id, {})

    const getComments = async () => {
      const response = await axios.get('http://localhost:3001/comments')
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
    <div className="comments">
      {props.comments
        .filter((c) => c.post === props.id)
        .map((comment) => (
          <div className="comment-dislike" key={comment._id}>
            <div className="fake">❌</div>
            <div className="comment">
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
            </div>
            {checkCurrentUser(comment)}
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
