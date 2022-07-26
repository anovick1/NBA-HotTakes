const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    post: { type: Schema.Types.ObjectId, ref: 'Post' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    date: { type: String, required: false },
    text: { type: String, required: true },
    likes: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = commentSchema
