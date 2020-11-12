const devToken =
  "BQDNwqIJuUwI4fxz1TRqg-FI9KfX7gvXcgIm64YuhY_FXaBWfs0iCsACZ7JJZ7c5q-HGkGidCZwv3ZXhDzVDfpDsl2_iNoxfVxDUeXMujGBNXm-aS2oo4rSpBZhX6Ugp46HicI1PqDj-ToFy0UTO_lhGVaTsgb8uckjZomItfMOzdnb2BYO2";

export const initialState = {
  user: null,
  token: devToken || null,
  playlists: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
