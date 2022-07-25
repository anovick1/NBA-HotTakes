import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostByUser from './PostByUser'

const ProfileDetails = (props) => {
  const [user, setUser] = useState('')
  let { id } = useParams()
  useEffect(() => {
    let selectedProfile = props.users.find((user) => user._id === id)
    setUser(selectedProfile)
  }, [props.users, id])

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
        <h1>Posts</h1>
        <PostByUser
          id={id}
          users={props.users}
          posts={props.posts}
          comments={props.comments}
          setPosts={props.setPosts}
          setComments={props.setComments}
          currentUser={props.currentUser}
          setCurrentUser={props.setCurrentUser}
        />
      </div>
    </div>
  ) : null
}

export default ProfileDetails
