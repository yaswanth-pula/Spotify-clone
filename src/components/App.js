import { useEffect } from "react";
import "./app.css";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "../spotify/spotify_config";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "../DataLayer";

const spotifyInstance = new SpotifyWebApi();

function App() {
  // {} -> to pull out from the datalayer,
  // dispatch is for pushing the data into the datalayer.
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotifyInstance.setAccessToken(_token);

      spotifyInstance.getMe().then((_user) => {
        dispatch({
          type: "SET_USER",
          user: _user,
        });
      });
    }
    spotifyInstance.getUserPlaylists().then((_playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: _playlists,
      });
    });
  }, [token, dispatch]);
  return (
    <div className="app">
      {token ? <Player spotifyInstance={spotifyInstance} /> : <Login />}
    </div>
  );
}

export default App;
