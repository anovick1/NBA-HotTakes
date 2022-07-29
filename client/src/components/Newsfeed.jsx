import React from 'react'
import { useNavigate } from 'react-router-dom'
import Likes from './sub-components/Likes'
import Comment from './sub-components/CommentFeed'
import axios from 'axios'

const Newsfeed = (props) => {
  let navigate = useNavigate()

  const showPost = (user) => {
    navigate(`${user}`)
  }
  const showPost1 = (username) => {
    navigate(`/home/${username}`)
  }
  const deletePost = async (post) => {
    await axios.delete('http://localhost:3001/post/' + post._id, {})

    const getPosts = async () => {
      const response = await axios.get('http://localhost:3001/posts')
      props.setPosts(response.data)
    }
    getPosts()
  }

  const checkDelete = (post) => {
    if (post.user === props.currentUser._id) {
      return (
        <div className="delete-post" onClick={() => deletePost(post)}>
          ❌
        </div>
      )
    } else {
      return <div className="fake">❌</div>
    }
  }
  return (
    <div className="newsfeed">
      {props.posts
        .slice(0)
        .reverse()
        .map((post) => (
          <div key={post.title}>
            {/* each post */}
            <div className="post">
              {props.users
                .filter((u) => u._id === post.user)
                .map((user) => (
                  <div key={user.username} className="post-info">
                    <div className="pfp-name-delete">
                      <div className="pfp-name">
                        <img src={user.pfp} alt="pfp" />
                        <h2 className="post-name">{user.name}</h2>
                      </div>
                      {checkDelete(post)}
                    </div>
                    <h3
                      onClick={() => showPost(user.username)}
                      className="post-username"
                    >
                      @<span>{user.username}</span>
                    </h3>
                    <p className="post-date">{post.date}</p>
                    <h2 id="post-title">{post.title}</h2>
                    <div className="post-pic-caption">
                      <div className="pic-likes">
                        <iframe
                          src={post.video}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullscreen="true"
                        ></iframe>
                        <div className="likes"></div>
                      </div>
                      <div className="post-pic-likes">
                        <div className="fake">❌</div>
                        <div className="post-caption">
                          <div className="pfp-username">
                            <div className="comment-pfp">
                              <img
                                src={user.pfp}
                                alt="commenter-pfp"
                                onClick={() => showPost1(user.username)}
                              />
                            </div>
                            <div
                              onClick={() => showPost1(user.username)}
                              className="comment-username"
                            >
                              <h3>
                                @<span>{user.username}</span>
                              </h3>
                            </div>
                          </div>
                          <div className="comment-text">{post.text}</div>
                          <Likes
                            post={post}
                            comment={false}
                            setPosts={props.setPosts}
                          />
                        </div>
                        <div className="fake-right">❌</div>
                      </div>
                    </div>
                  </div>
                ))}
              {/* comment section */}
              <h3>Comments:</h3>
              <Comment
                id={post._id}
                users={props.users}
                posts={props.posts}
                comments={props.comments}
                setPosts={props.setPosts}
                setComments={props.setComments}
                currentUser={props.currentUser}
                setCurrentUser={props.setCurrentUser}
                showPost={showPost1}
              />
            </div>
          </div>
        ))}
    </div>
  )
}

export default Newsfeed
