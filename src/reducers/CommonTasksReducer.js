import {
  RENDER_SHUFFLE_TEAM,
  RESET_SHUFFLE_TEAM,
  SET_SELECTED_LEAGUE,
  NEW_PLAYERS_ADDED,
  RESET_NEW_PLAYERS_ADDED,
} from "../actions/types";

const INITIAL_STATE = {
  renderPlayingTeam: false,
  selectedLeague: null,
  newPlayersAdded: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RENDER_SHUFFLE_TEAM:
      return { ...state, renderPlayingTeam: true };
    case NEW_PLAYERS_ADDED:
      return { ...state, newPlayersAdded: true };
    case RESET_NEW_PLAYERS_ADDED:
      return { ...state, newPlayersAdded: false };
    case RESET_SHUFFLE_TEAM:
      return { ...state, renderPlayingTeam: false };
    case SET_SELECTED_LEAGUE:
      return { ...state, selectedLeague: action.payload };
    default:
      return state;
  }
}