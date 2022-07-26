import React from 'react'
import { useNavigate } from 'react-router-dom'
import CommentForm from './CommentForm'
import Likes from './Likes'

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
                            onClick={() => showPost(user.username)}
                          />
                        </div>
                        <div
                          onClick={() => showPost(user.username)}
                          className="comment-username"
                        >
                          @{user.username}:
                        </div>
                      </div>
                      <div className="comment-text">{post.text}</div>
                      {/* <div className="likes"> */}
                      {/* <div className="post-like">👍 {post.likes}</div>
                      <div className="post-dislike">👎 {post.dislikes}</div> */}
                      <Likes post={post} />
                      {/* </div> */}
                    </div>
                  </div>
                ))}
              {/* comment section */}
              <h3>Comments</h3>
              <div className="comments">
                {props.comments
                  .filter((c) => c.post === post._id)
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
                              onClick={() => showPost(user.username)}
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
                      />
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
