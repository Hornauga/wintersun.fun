import "./App.css";
import { Song, allSongs } from "./music.ts";

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
      {allSongs.map((song) => (
        <div>
          <h3>{song.title}</h3>
          <p>
            <YouTubeEmbed song={song} />
          </p>
          {"spotify" in song.src && (
            <p>
              <a href={`https://open.spotify.com/track/${song.src.spotify}`}>
                Listen on Spotify
              </a>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
