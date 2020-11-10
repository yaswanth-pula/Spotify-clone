import "./login.css";
import loginUrl from "../spotify/spotify_config";

function Login() {
  return (
    <div className="login">
      {/* spotify logo */}
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify logo"
      />
      {/* login oauth */}
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
}

export default Login;
