import React, { useState } from 'react'
import Instruction from '../components/sub-components/Instructions.jsx'
import CreateForm from '../components/sub-components/CreateForm.jsx'

const CreatePost = (props) => {
  const [info, setInfo] = useState(true)
  const [create, setCreate] = useState(false)
  const [done, setDone] = useState(false)

  const infoClick = () => {
    setInfo(true)
    setCreate(false)
  }
  const createClick = () => {
    setInfo(false)
    setCreate(true)
  }

  const displayBar = () => {
    if (info) {
      return (
        <div className="top-bar">
          <div className="bar-selected" onClick={() => infoClick()}>
            <h1>Instructions</h1>
          </div>
          <div className="bar-unselected" onClick={() => createClick()}>
            <h1>Create Post!</h1>
          </div>
        </div>
      )
    }
    if (create) {
      return (
        <div className="top-bar">
          <div className="bar-unselected" onClick={() => infoClick()}>
            <h1>Instructions</h1>
          </div>
          <div className="bar-selected" onClick={() => createClick()}>
            <h1>Create Post!</h1>
          </div>
        </div>
      )
    }
  }
  const displayFeed = () => {
    if (info) {
      return <Instruction setInfo={setInfo} setCreate={setCreate} />
    } else if (create) {
      return (
        <CreateForm
          currentUser={props.currentUser}
          posts={props.posts}
          setPosts={props.setPosts}
          newPost={props.newPost}
          setNewPost={props.setNewPost}
          done={done}
          setDone={setDone}
        />
      )
    }
  }
  return (
    <div className="create-page">
      {displayBar()}
      {displayFeed()}
    </div>
  )
}

export default CreatePost
