import { Link } from "react-router";

function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;
  if (sec < 10) {
    sec = "0" + sec;
  }
  return min + ":" + sec;
}

function SongCard({ song, togglePlaylist }) {
  return (
    <div className="card">
      <h3>{song.title}</h3>
      <p>Artist: {song.artist}</p>
      <p>Genre: {song.genre}</p>
      <p>Duration: {formatTime(song.duration)}</p>

      {song.streams >= 1000000 && <p className="badge">Trending 🔥</p>}

      <div>
        <button onClick={() => togglePlaylist(song.id)}>
          {song.isInPlaylist ? "Remove from Playlist" : "Add to Playlist"}
        </button>
      </div>

      <Link to={`/songs/${song.id}`}>View Details</Link>
    </div>
  );
}

export default SongCard;
