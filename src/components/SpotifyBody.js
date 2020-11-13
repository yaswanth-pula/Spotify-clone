import "./spotifyBody.css";
import Header from "./Header";
import { useDataLayerValue } from "../DataLayer";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SongRow from "./SongRow";

function SpotifyBody({ instance }) {
  const [{ discover_weekly }] = useDataLayerValue();
  console.log(discover_weekly);
  return (
    <div className="spotifyBody">
      <Header spotifyInstance={instance} />
      <div className="spotifyBody__info">
        <img src={discover_weekly?.images[0].url} alt="Weekly Poster" />
        <div className="spotifyBody__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="spotifyBody__songs">
        <div className="spotifyBody__icons">
          <PlayCircleFilledIcon className="spotifyBody__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {/* list of songs */}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default SpotifyBody;
