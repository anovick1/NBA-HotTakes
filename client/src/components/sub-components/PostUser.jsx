import React from 'react'
import Likes from './Likes'
import Comment from './CommentFeed'

const Post = (props) => {
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
                      onClick={() => props.showPost(user.username)}
                      className="post-username"
                    >
                      @<span>{user.username}</span>
                    </h3>
                    <p className="post-date">{post.date}</p>

                    <h2 id="post-title">{post.title}</h2>
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
                    <div className="post-caption">
                      <div className="pfp-username">
                        <div className="comment-pfp">
                          <img
                            src={user.pfp}
                            alt="commenter-pfp"
                            onClick={() => props.showPost(user.username)}
                          />
                        </div>
                        <div
                          onClick={() => props.showPost(user.username)}
                          className="comment-username"
                        >
                          <h4>
                            @<span>{user.username}</span>
                          </h4>
                        </div>
                      </div>
                      <div className="comment-text">{post.text}</div>
                      <Likes post={post} comment={false} />
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
                showPost={props.showPost}
              />
            </div>
          </div>
        ))}
    </div>
  )
}

export default Post
