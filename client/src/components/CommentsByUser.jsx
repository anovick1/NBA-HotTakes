import React from 'react'
import { useNavigate } from 'react-router-dom'
import Likes from './sub-components/Likes'
import Comment from './sub-components/CommentUser'

const CommentsByUser = (props) => {
  let navigate = useNavigate()

  const showPost = (user) => {
    navigate(`/home/${user}`)
  }

  const displayComments = () => {
    if (props.comments.filter((c) => c.user === props.id).length > 0) {
      return (
        <Comment
          id={props.id}
          users={props.users}
          posts={props.posts}
          comments={props.comments}
          setPosts={props.setPosts}
          setComments={props.setComments}
          currentUser={props.currentUser}
          setCurrentUser={props.setCurrentUser}
          showPost={showPost}
        />
      )
    } else {
      return (
        <div className="none">
          <h1>User has no comments</h1>
        </div>
      )
    }
  }
  console.log(props.comments.filter((c) => c.user === props.id).length)
  return <div>{displayComments()}</div>
}

export default CommentsByUser
