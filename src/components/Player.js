import "./player.css";
import SpotifyBody from "./SpotifyBody";
import SpotifySideBar from "./SpotifySideBar";
import SpotifyFooter from "./SpotifyFooter";

function Player({ spotifyInstance }) {
  return (
    <div className="player">
      <div className="player__body">
        <SpotifySideBar />
        <SpotifyBody instance={spotifyInstance} />
      </div>
      <SpotifyFooter />
    </div>
  );
}

export default Player;
