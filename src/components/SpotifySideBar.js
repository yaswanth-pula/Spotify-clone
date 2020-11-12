import SideBarOption from "./SideBarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import "./spotifySideBar.css";
import { useDataLayerValue } from "../DataLayer";

function SpotifySideBar() {
  const [{ playlists }] = useDataLayerValue();

  return (
    <div className="spotifySideBar">
      <img
        className="spotifySideBar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify logo"
      />
      <SideBarOption title="Home" Icon={HomeIcon} />
      <SideBarOption title="Search" Icon={SearchIcon} />
      <SideBarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="spotifySideBar__title">PlayLists</strong>
      <hr />
      {console.log(playlists)}
      {playlists?.items?.map((playlist) => (
        <SideBarOption key={playlist.id} title={playlist.name} />
      ))}
    </div>
  );
}

export default SpotifySideBar;
