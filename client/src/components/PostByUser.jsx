import React from 'react'
import { useNavigate } from 'react-router-dom'
import CommentForm from './CommentForm'

const PostByUser = (props) => {
  let navigate = useNavigate()

  const showPost = (user) => {
    navigate(`/home/${user}`)
  }
  return (
    <div className="newsfeed">
      {props.posts
        .filter((p) => p.user === props.id)
        .map((post) => (
          <div key={post.title}>
            <div className="post">
              {props.users
                .filter((u) => u._id === post.user)
                .map((user) => (
                  <div key={user.username} className="post-info">
                    <div className="pfp-name">
                      <img src={user.pfp} alt="pfp" />
                      <h2 className="post-name">{user.name}</h2>
                    </div>
                    <h3 className="post-username">@{user.username}</h3>
                    <p className="post-date">{post.date}</p>
                  </div>
                ))}
              <h2>{post.title}</h2>
              <div className="comment-pic-likes">
                {/* <img src={post.image} alt="post-pic" /> */}
                <iframe
                  src={post.video}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <div className="likes">
                  <div className="post-like">👍 {post.likes}</div>
                  <div className="post-dislike">👎 {post.dislikes}</div>
                </div>
              </div>
              <div className="comments">
                {props.comments
                  .filter((c) => c.post === post._id)
                  .map((comment) => (
                    <div className="comment" key={comment.text}>
                      {props.users
                        .filter((u) => u._id === comment.user)
                        .map((user) => (
                          <div className="pfp-username">
                            <div className="comment-pfp">
                              <img src={user.pfp} alt="commenter-pfp" />
                            </div>
                            <div
                              onClick={() => showPost(user.username)}
                              className="comment-username"
                            >
                              @{user.username}:
                            </div>
                          </div>
                        ))}
                      <div className="comment-text">{comment.text}</div>
                      <div className="comment-likes"> 👍{comment.likes}</div>
                    </div>
                  ))}
                <div>
                  <CommentForm
                    postid={post._id}
                    currentUser={props.currentUser}
                    showPost1={showPost}
                    posts={props.posts}
                    users={props.users}
                    setCurrentUser={props.setCurrentUser}
                    setComments={props.setComments}
                    comments={props.comments}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default PostByUser
