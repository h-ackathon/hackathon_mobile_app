import {
  LEAGUE_PLAYERS_SPINNER,
  LEAGUE_PLAYERS_SUCCESS,
  GET_LEAGUE_PLAYERS,
} from "../actions/types";

const INITIAL_STATE = {
  allPlayers: [],
  loading: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LEAGUE_PLAYERS:
      return {...state, allPlayers: action.payload};
    case LEAGUE_PLAYERS_SPINNER:
      return {...state, loading: true};
    case LEAGUE_PLAYERS_SUCCESS:
      return {...state, loading: false};
    default:
      return state;
  }
}