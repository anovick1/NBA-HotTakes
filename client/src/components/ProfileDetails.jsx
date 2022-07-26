import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostByUser from './PostByUser'
import CommentsByUser from './CommentsByUser'

const ProfileDetails = (props) => {
  const [posts, setPosts] = useState(true)
  const [comments, setComments] = useState(false)

  const postClick = () => {
    setPosts(true)
    setComments(false)
  }
  const commentClick = () => {
    setPosts(false)
    setComments(true)
  }

  const displayFeed = () => {
    if (posts) {
      return (
        <PostByUser
          id={user._id}
          users={props.users}
          posts={props.posts}
          comments={props.comments}
          setPosts={props.setPosts}
          setComments={props.setComments}
          currentUser={props.currentUser}
          setCurrentUser={props.setCurrentUser}
        />
      )
    } else if (comments) {
      return (
        <CommentsByUser
          id={user._id}
          users={props.users}
          posts={props.posts}
          comments={props.comments}
          setPosts={props.setPosts}
          setComments={props.setComments}
          currentUser={props.currentUser}
          setCurrentUser={props.setCurrentUser}
        />
      )
    }
  }

  const [user, setUser] = useState('')
  let { username } = useParams()
  useEffect(() => {
    let selectedProfile = props.users.find((user) => user.username === username)
    setUser(selectedProfile)
  }, [props.users, username])

  return user ? (
    <div className="detail">
      <div className="detail-header">
        <h1>{user.name}</h1>{' '}
        <a href={user.url}>
          <img src={user.pfp} alt={user.name} />
        </a>
        <h3>{user.bio}</h3>
      </div>
      <div className="reviews">
        <div class="top-bar">
          <div className="bar-posts" onClick={() => postClick()}>
            <h1>Posts</h1>
          </div>
          <div className="bar-comments" onClick={() => commentClick()}>
            <h1>Comments</h1>
          </div>
        </div>
        {displayFeed()}
      </div>
    </div>
  ) : null
}

export default ProfileDetails
