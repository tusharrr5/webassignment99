import { useState } from "react";
import SongCard from "../components/SongCard";

function Songs({ songs, togglePlaylist }) {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  let filteredSongs = songs.filter((song) => {
    return (
      (song.title.toLowerCase().includes(search.toLowerCase()) ||
        song.artist.toLowerCase().includes(search.toLowerCase())) &&
      (genre === "All" || song.genre === genre)
    );
  });

  return (
    <div className="container">
      <h2>All Songs</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by title or artist..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="All">All</option>
          <option value="Romantic">Romantic</option>
          <option value="Motivational">Motivational</option>
          <option value="Sufi">Sufi</option>
          <option value="Punjabi">Punjabi</option>
        </select>
      </div>

      <div className="cards-grid">
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song) => {
            return (
              <SongCard
                key={song.id}
                song={song}
                togglePlaylist={togglePlaylist}
              />
            );
          })
        ) : (
          <p>No songs found.</p>
        )}
      </div>
    </div>
  );
}

export default Songs;
