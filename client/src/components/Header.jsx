import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <header>
      <nav>
        <div className="logout-nav">
          <Link to="/">
            <h2> Logout</h2>
          </Link>
        </div>
        <div className="home-nav">
          <Link to="/home">
            <h2> Home</h2>
          </Link>
        </div>
        <div className="user-nav">
          <Link
            to={'/home/' + props.currentUser.username}
            className="user-profile"
          >
            <div id="pfp">
              <img src={props.currentUser.pfp} alt="pfp" />
            </div>
            <div id="username">
              <h2>{props.currentUser.username}</h2>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
