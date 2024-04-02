import "./App.css";
import { Song, allSongs } from "./music.ts";
import Button from '@mui/material/Button';


function YouTubeEmbed({ song }: { song: Song }) {
  const src = `https://www.youtube.com/embed/${song.src.youtube}`;
  console.log(src);
  return (
    <iframe
      width="560"
      height="315"
      src={src}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}

function SpotifyEmbed({ song }: { song: Song }) {
  const src = `https://open.spotify.com/embed/track/${song.src.spotify}`;
  return (
    <iframe
      src={src}
      width="100%"
      height="152"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="icons/wintersun.png"
          className="App-logo"
          alt="Wintersun logo"
        />
        <p>Spreading the Wintersun fun!</p>
      </header>

      <div>
        <Button variant="contained">Click me</Button>
      </div>
      {allSongs.map((song) => (
        <div>
          <h3>{song.title}</h3>
          <p>
            <YouTubeEmbed song={song} />
          </p>
          {"spotify" in song.src && <SpotifyEmbed song={song} />}
        </div>
      ))}
    </div>
  );
}

export default App;
