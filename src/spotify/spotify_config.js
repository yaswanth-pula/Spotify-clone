const clientId = "1adf334988274d9893d1f27083e9e3be";

const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((intial, item) => {
      let parts = item.split("=");
      intial[parts[0]] = decodeURIComponent(parts[1]);
      return intial;
    }, {});
};

const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export default loginUrl;
export { getTokenFromUrl };
