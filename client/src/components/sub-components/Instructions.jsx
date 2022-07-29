import React from 'react'

const Instructions = (props) => {
  const goCreate = async (e) => {
    props.setInfo(false)
    props.setCreate(true)
  }
  return (
    <div className="form" id="create-form">
      <h1>How to upload a video</h1>
      <ol>
        <li id="one">Find the video you want to post on youtube </li>

        <li>Click on the share button </li>
        <img
          id="share"
          src="https://github.com/anovick1/NBA-HotTakes/blob/main/images/youtube-share.png?raw=true"
          alt="share"
        />
        <li>Click on the embed button </li>
        <img
          id="embed"
          src="https://github.com/anovick1/NBA-HotTakes/blob/main/images/embed-btn.png?raw=true"
          alt="embed"
        />
        <li>
          Copy the url listed right after ' src=" '. Do NOT include the
          apostrophes
        </li>
        <img
          id="copy"
          src="https://github.com/anovick1/NBA-HotTakes/blob/main/images/copy-url.png?raw=true"
          alt="copy"
        />
      </ol>
      <button id="form-submit-2" onClick={() => goCreate()}>
        Create Post
      </button>
    </div>
  )
}

export default Instructions
