import SongCard from "../components/SongCard";

function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;
  if (sec < 10) {
    sec = "0" + sec;
  }
  return min + ":" + sec;
}

function Playlist({ songs, togglePlaylist }) {
  const playlistSongs = songs.filter((song) => song.isInPlaylist);

  let totalDuration = 0;
  for (let i = 0; i < playlistSongs.length; i++) {
    totalDuration += playlistSongs[i].duration;
  }

  return (
    <div className="container">
      <h2>My Playlist</h2>

      {playlistSongs.length === 0 ? (
        <p>Your playlist is empty</p>
      ) : (
        <div>
          <p>
            <strong>Total Duration:</strong> {formatTime(totalDuration)}
          </p>

          <div className="cards-grid">
            {playlistSongs.map((song) => {
              return (
                <SongCard
                  key={song.id}
                  song={song}
                  togglePlaylist={togglePlaylist}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Playlist;
