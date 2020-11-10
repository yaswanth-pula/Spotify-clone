import { useState, useEffect } from "react";
import "./app.css";
import Login from "./Login";
import { getTokenFromUrl } from "../spotify/spotify_config";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;
    if (_token) setToken(_token);

    // console.log("Bro Access token : -->", token);
  }, [token]);

  return (
    <div className="app">
      {token ? <h1>I am logged with {token}</h1> : <Login />}
    </div>
  );
}

export default App;
