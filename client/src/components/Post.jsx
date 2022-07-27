import React from 'react'
import { useNavigate } from 'react-router-dom'
import CommentForm from './CommentForm'
import Likes from './sub-components/Likes'
import Comment from './sub-components/CommentFeed'

const Post = (props) => {
  let navigate = useNavigate()

  const showPost = (user) => {
    navigate(`${user}`)
  }
  const showPost1 = (username) => {
    navigate(`/home/${username}`)
  }
  return (
    <div className="newsfeed">
      {props.posts.map((post) => (
        <div key={post.title}>
          {/* each post */}
          <div className="post">
            {props.users
              .filter((u) => u._id === post.user)
              .map((user) => (
                <div key={user.username} className="post-info">
                  <div className="pfp-name">
                    <img src={user.pfp} alt="pfp" />
                    <h2 className="post-name">{user.name}</h2>
                  </div>
                  <h3
                    onClick={() => showPost(user.username)}
                    className="post-username"
                  >
                    @{user.username}
                  </h3>
                  <p className="post-date">{post.date}</p>

                  <h2 id="post-title">{post.title}</h2>
                  <div className="pic-likes">
                    <iframe
                      src={post.video}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                    <div className="likes"></div>
                  </div>
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
                        @{user.username}:
                      </div>
                    </div>
                    <div className="comment-text">{post.text}</div>
                    <Likes
                      post={post}
                      comment={false}
                      setPosts={props.setPosts}
                    />
                  </div>
                </div>
              ))}
            {/* comment section */}
            <h3>Comments</h3>
            <Comment
              id={post._id}
              users={props.users}
              posts={props.posts}
              comments={props.comments}
              setPosts={props.setPosts}
              setComments={props.setComments}
              currentUser={props.currentUser}
              setCurrentUser={props.setCurrentUser}
              showPost={showPost}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Post
