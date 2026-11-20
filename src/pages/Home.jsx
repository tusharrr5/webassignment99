function Home({ songs }) {
  const totalSongs = songs.length;
  const playlistCount = songs.filter((song) => song.isInPlaylist).length;
  const trendingCount = songs.filter((song) => song.streams >= 1000000).length;

  return (
    <div className="container">
      <h1>Music Playlist App</h1>
      <p>Welcome to Music Playlist app. You can browse songs, check trending songs and create your playlist.</p>

      <div className="summary-boxes">
        <div className="summary-card">
          <h3>Total Songs</h3>
          <p>{totalSongs}</p>
        </div>

        <div className="summary-card">
          <h3>Songs in Playlist</h3>
          <p>{playlistCount}</p>
        </div>

        <div className="summary-card">
          <h3>Trending Songs</h3>
          <p>{trendingCount}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
