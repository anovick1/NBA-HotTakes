const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema(
  {
    user: { type: String, ref: 'User' },
    title: { type: String, required: true },
    date: { type: String, required: true },
    text: { type: String, required: true },
    image: { type: String, required: true },
    video: { type: String, required: true },
    likes: { type: String, required: true },
    dislikes: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = postSchema
