import { useParams, Link } from "react-router";

function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;
  if (sec < 10) {
    sec = "0" + sec;
  }
  return min + ":" + sec;
}

function SongDetails({ songs, togglePlaylist }) {
  const { id } = useParams();
  const song = songs.find((s) => s.id == id);

  if (!song) {
    return (
      <div className="container">
        <h2>Song not found</h2>
        <Link to="/songs">Back to Songs</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h2>{song.title}</h2>
        <p>Artist: {song.artist}</p>
        <p>Album: {song.album}</p>
        <p>Genre: {song.genre}</p>
        <p>Year: {song.year}</p>
        <p>Duration: {formatTime(song.duration)}</p>
        <p>Streams: {song.streams}</p>

        {song.streams >= 1000000 && <p className="badge">Trending 🔥</p>}

        <div>
          <button onClick={() => togglePlaylist(song.id)}>
            {song.isInPlaylist ? "Remove from Playlist" : "Add to Playlist"}
          </button>
        </div>

        <Link to="/songs">Back to Songs</Link>
      </div>
    </div>
  );
}

export default SongDetails;
