import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <header>
      <nav>
        <div>
          <Link to="/">Logout</Link>
        </div>
        <div>
          <Link to="/home">Home</Link>
        </div>
        <div>
          <Link to={'/home/' + props.currentUser.username}>
            {props.currentUser.username}
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
