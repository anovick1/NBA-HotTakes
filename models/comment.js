const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    post: { type: Schema.Types.ObjectId, ref: 'Post' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    // username: { type: String, ref: 'User' },
    // pfp: { type: String, ref: 'User' },
    date: { type: String, required: true },
    text: { type: String, required: true },
    likes: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = commentSchema
