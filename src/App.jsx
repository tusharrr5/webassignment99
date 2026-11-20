import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import songsData from "./data/songs";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import SongDetails from "./pages/SongDetails";
import Playlist from "./pages/Playlist";
import "./App.css";

function App() {
  const [songs, setSongs] = useState(songsData);

  function togglePlaylist(id) {
    const updatedSongs = songs.map((song) => {
      if (song.id === id) {
        return { ...song, isInPlaylist: !song.isInPlaylist };
      }
      return song;
    });
    setSongs(updatedSongs);
  }

  const playlistCount = songs.filter((song) => song.isInPlaylist).length;

  return (
    <BrowserRouter>
      <Navbar playlistCount={playlistCount} />

      <Routes>
        <Route path="/" element={<Home songs={songs} />} />
        <Route
          path="/songs"
          element={<Songs songs={songs} togglePlaylist={togglePlaylist} />}
        />
        <Route
          path="/songs/:id"
          element={
            <SongDetails songs={songs} togglePlaylist={togglePlaylist} />
          }
        />
        <Route
          path="/playlist"
          element={
            <Playlist songs={songs} togglePlaylist={togglePlaylist} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
