import { Link } from "react-router";

function Navbar({ playlistCount }) {
  return (
    <nav className="navbar">
      <h2>Music Playlist</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/songs">Songs</Link>
        <Link to="/playlist">Playlist ({playlistCount})</Link>
      </div>
    </nav>
  );
}

export default Navbar;
