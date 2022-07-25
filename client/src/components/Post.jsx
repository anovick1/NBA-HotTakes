import React from 'react'
import { useNavigate } from 'react-router-dom'

const Post = (props) => {
  let navigate = useNavigate()

  const showPost = (post) => {
    navigate(`${post._id}`)
  }

  return (
    <div className="newsfeed">
      {props.posts.map((post) => (
        <div key={post.name} onClick={() => showPost(post)}>
          <div className="post">
            <h2>{post.title}</h2>
            <img src={post.image} alt="post-pic" />
            <h3>
              Likes: {post.likes} Dislikes: {post.dislikes}
            </h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Post
