import React, { useState } from 'react'
import axios from 'axios'

const CommentForm = (props) => {
  const addReview = async (e) => {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [rating, setRating] = useState('')

    await axios.post('http://localhost:3001/reviews/' + props.id, {
      post: props.postid,
      user: props.currentu,
      park: props.id,
      text: text,
      date: date,
      rating: rating,
      pfp: 'https://cdn.create.vista.com/api/media/small/483971320/stock-vector-profile-icon-users-vector-illustration'
    })

    setName('')
  }

  return <div>CommentForm</div>
}

export default CommentForm
