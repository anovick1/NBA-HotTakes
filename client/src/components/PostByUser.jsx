import React from 'react'
import { useNavigate } from 'react-router-dom'
import Post from './sub-components/PostUser'

const PostByUser = (props) => {
  console.log(props.currentUser)
  let navigate = useNavigate()

  const showPost = (user) => {
    navigate(`/home/${user}`)
  }

  const displayPosts = () => {
    if (props.posts.filter((c) => c.user === props.id).length > 0) {
      return (
        <Post
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
          <h1>User has no Posts</h1>
        </div>
      )
    }
  }

  return <div>{displayPosts()}</div>
}

export default PostByUser
