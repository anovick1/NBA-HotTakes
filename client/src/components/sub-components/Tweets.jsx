import React from 'react'
import { useNavigate } from 'react-router-dom'

const Tweets = (props) => {
  let tweets = props.users.filter((u) => u._id === props.id)[0].tweets
  let user = props.users.filter((u) => u._id === props.id)[0]

  const displayTweets = () => {
    if (tweets.length > 0) {
      return (
        <div className="tweets">
          {tweets.map((tweet) => (
            <div className="tweet" key={tweet.text}>
              <div className="tweet-pfp-url">
                <div className="tweet-pfp-user">
                  <div className="tweet-pfp">
                    <img src={user.pfp} alt="tweet-pfp" />
                  </div>
                  <div className="tweet-username-user">
                    <div className="tweet-name">
                      <h3>{user.name}</h3>
                    </div>
                    <div className="tweet-username">
                      <p>
                        @<span>{user.username}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tweet-link">
                  <a href={user.twitterUrl} target="_blank" rel="noreferrer">
                    <img
                      src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg"
                      alt="twitter-logo"
                    />
                  </a>
                </div>
              </div>
              <div className="tweet-text">{tweet.text}</div>
            </div>
          ))}
        </div>
      )
    } else {
      return <h1>User has no tweets</h1>
    }
  }
  return <div>{displayTweets()}</div>
}

export default Tweets
