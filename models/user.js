const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    name: { type: String, required: true },
    bio: { type: String, required: false },
    pfp: { type: String, required: false },
    twitterUrl: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = userSchema
