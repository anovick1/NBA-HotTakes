import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Post = (props) => {
  const [poster, setPoster] = useState([])
  let id = ''
  let p
  let navigate = useNavigate()

  const showPost = (post) => {
    navigate(`${post._id}`)
  }

  return (
    <div className="newsfeed">
      {props.posts.map((post) => (
        <div key={post.title} onClick={() => showPost(post)}>
          <div className="post">
            <div className="post-info">
              <div className="pfp-name">
                <img src={post.pfp} alt="pfp" />
                <h2 className="post-name">{post.name}</h2>
              </div>
              <h3 className="post-username">@{post.username}</h3>
              <p className="post-date">{post.date}</p>
            </div>
            <h2>{post.title}</h2>
            <img src={post.image} alt="post-pic" />
            <h3>
              👍 {post.likes} 👎 {post.dislikes}
            </h3>
            <div className="comments">
              {props.comments
                .filter((c) => c.post === post._id)
                .map((comment) => (
                  <div key={comment.text}>
                    <div className="comment-pfp">
                      <img src={comment.pfp} alt="commenter-pfp" />
                    </div>
                    <div className="comment-username">{comment.username}</div>
                    <div className="comment-text">{comment.text}</div>
                    <div className="comment-likes"> 👍{comment.likes}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Post
