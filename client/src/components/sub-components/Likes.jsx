import React from 'react'
import axios from 'axios'

const Likes = (props) => {
  let post = props.post
  const like = async (e) => {
    let likes = parseInt(post.likes) + 1

    if (props.comment === false) {
      await axios.put('/post/' + post._id, {
        likes: likes
      })

      const getPosts = async () => {
        const response = await axios.get('/posts')
        props.setPosts(response.data)
      }
      getPosts()
    } else {
      await axios.put('/comment/' + post._id, {
        likes: likes
      })

      const getPosts = async () => {
        const response = await axios.get('/comments')
        props.setComments(response.data)
      }
      getPosts()
    }
  }

  const dislike = async (e) => {
    let likes = parseInt(post.likes) - 1

    if (props.comment === false) {
      await axios.put('post/' + post._id, {
        likes: likes
      })

      const getPosts = async () => {
        const response = await axios.get('/posts')
        props.setPosts(response.data)
      }
      getPosts()
    } else {
      await axios.put('/comment/' + post._id, {
        likes: likes
      })

      const getPosts = async () => {
        const response = await axios.get('/comments')
        props.setComments(response.data)
      }
      getPosts()
    }
  }

  return (
    <div className="likeCount">
      <div className="likes">
        <div className="post-like" onClick={() => like()}>
          👍
        </div>
        <div className="post-dislike" onClick={() => dislike()}>
          👎
        </div>
      </div>
      <div>{post.likes}</div>
    </div>
  )
}

export default Likes
