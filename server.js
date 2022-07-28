const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Post, User, Comment } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(express.static(`${__dirname}/client/build`))

app.get('/', (req, res) => {
  res.send('This is root!')
})

///
/// USER API
///

// get all users
app.get('/users', async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

// get user by id
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) throw Error('User not found')
    res.json(user)
  } catch (e) {
    console.log(e)
    res.send('User not found!')
  }
})
// get user by username
app.get('/user/:username', async (req, res) => {
  try {
    const user = await User.find({ username: req.params.username })
    if (!user) throw Error('User not found')
    res.json(user)
  } catch (e) {
    console.log(e)
    res.send('User not found!')
  }
})

// create a post
app.post('/user', async (req, res) => {
  try {
    const user = await new User(req.body)
    await user.save()
    return res.status(201).json({
      user
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

///
/// POSTS API
///

// get all posts
app.get('/posts', async (req, res) => {
  const posts = await Post.find({})
  res.json(posts)
})

// get post by id
app.get('/post/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post) throw Error('Post not found')
    res.json(post)
  } catch (e) {
    console.log(e)
    res.send('Post not found!')
  }
})

/// get posts by user id
app.get('/user/posts/:id', async (req, res) => {
  try {
    const post = await Post.find({ user: req.params.id })
    if (!Post) throw Error('Post not found')
    res.json(post)
  } catch (e) {
    console.log(e)
    res.send('Post not found!')
  }
})

// create a post
app.post('/post', async (req, res) => {
  try {
    const post = await new Post(req.body)
    await post.save()
    return res.status(201).json({
      post
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

// update post
app.put('/post/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(post)
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

// delete
app.delete('/post/:id', async (req, res) => {
  try {
    const deleted = await Post.findByIdAndDelete(req.params.id)
    if (deleted) {
      return res.status(200).send('Post deleted')
    }
    throw new Error('Post not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

///
/// COMMENTS API
///

// get all comments
app.get('/comments', async (req, res) => {
  const comments = await Comment.find({})
  res.json(comments)
})

// get comment by comment id
app.get('/comment/:id', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id)
    if (!comment) throw Error('Comment not found')
    res.json(comment)
  } catch (e) {
    console.log(e)
    res.send('Comment not found!')
  }
})

/// get comments by user id
app.get('/user/comments/:id', async (req, res) => {
  try {
    const comment = await Comment.find({ user: req.params.id })
    if (!Comment) throw Error('Comment not found')
    res.json(comment)
  } catch (e) {
    console.log(e)
    res.send('Comment not found!')
  }
})

/// get comments by post id
app.get('/post/comments/:id', async (req, res) => {
  try {
    const comment = await Comment.find({ post: req.params.id })
    if (!Comment) throw Error('Comment not found')
    res.json(comment)
  } catch (e) {
    console.log(e)
    res.send('Comment not found!')
  }
})

// create a comment
app.post('/comments/:id', async (req, res) => {
  try {
    const comment = await new Comment(req.body)
    await comment.save()
    return res.status(201).json({
      comment
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

// update comment
app.put('/comment/:id', async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(comment)
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

// delete
app.delete('/comment/:id', async (req, res) => {
  try {
    const deleted = await Comment.findByIdAndDelete(req.params.id)
    if (deleted) {
      return res.status(200).send('Comment deleted')
    }
    throw new Error('Comment not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
