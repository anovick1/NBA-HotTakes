const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    name: { type: String, required: true },
    bio: { type: String, required: true },
    pfp: { type: String, required: true },
    twitterUrl: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = userSchema
