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
        <div className="user-nav-dropdown">
          <button className="dropbtn">
            <div id="pfp">
              <img src={props.currentUser.pfp} alt="pfp" />
            </div>
            <div id="username">
              <h2>
                @<span id="nav">{props.currentUser.username}</span>
              </h2>
            </div>
          </button>
          <div className="dropdown-content">
            <Link
              to={'/home/' + props.currentUser.username}
              className="user-profile"
            >
              <h4>View Profile</h4>
            </Link>
            <Link to={'/create-post'} className="user-profile">
              <h4>Make Post</h4>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
