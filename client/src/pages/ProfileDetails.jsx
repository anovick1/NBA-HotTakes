import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostByUser from '../components/PostByUser'
import CommentsByUser from '../components/CommentsByUser'
import Tweets from '../components/sub-components/Tweets'

const ProfileDetails = (props) => {
  const [posts, setPosts] = useState(true)
  const [comments, setComments] = useState(false)
  const [tweets, setTweets] = useState(false)

  const postClick = () => {
    setPosts(true)
    setComments(false)
  }
  const commentClick = () => {
    setPosts(false)
    setComments(true)
  }
  const tweetClick = () => {
    setPosts(false)
    setComments(false)
    setTweets(true)
  }

  const displayBar = () => {
    if (posts) {
      return (
        <div class="top-bar">
          <div className="bar-selected" onClick={() => postClick()}>
            <h1>Posts</h1>
          </div>
          <div className="bar-unselected" onClick={() => commentClick()}>
            <h1>Comments</h1>
          </div>
          <div className="bar-unselected" onClick={() => tweetClick()}>
            <h1>Tweets</h1>
          </div>
        </div>
      )
    }
    if (comments) {
      return (
        <div class="top-bar">
          <div className="bar-unselected" onClick={() => postClick()}>
            <h1>Posts</h1>
          </div>
          <div className="bar-selected" onClick={() => commentClick()}>
            <h1>Comments</h1>
          </div>
          <div className="bar-unselected" onClick={() => tweetClick()}>
            <h1>Tweets</h1>
          </div>
        </div>
      )
    }
    if (tweets) {
      return (
        <div class="top-bar">
          <div className="bar-unselected" onClick={() => postClick()}>
            <h1>Posts</h1>
          </div>
          <div className="bar-unselected" onClick={() => commentClick()}>
            <h1>Comments</h1>
          </div>
          <div className="bar-selected" onClick={() => tweetClick()}>
            <h1>Tweets</h1>
          </div>
        </div>
      )
    }
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
    } else if (tweets) {
      return (
        <Tweets
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
        {/* <div class="top-bar">
          <div className="bar-posts" onClick={() => postClick()}>
            <h1>Posts</h1>
          </div>
          <div className="bar-comments" onClick={() => commentClick()}>
            <h1>Comments</h1>
          </div>
          <div className="bar-tweets" onClick={() => commentClick()}>
            <h1>Tweets</h1>
          </div>
        </div> */}
        {displayBar()}
        {displayFeed()}
      </div>
    </div>
  ) : null
}

export default ProfileDetails
