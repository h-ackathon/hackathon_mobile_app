import {
  GET_MATCHES_BY_LEAGUE,
  GET_FIRST_TAEM_PLAYERS,
  GET_SECOND_TAEM_PLAYERS,
  GET_TAEM_PLAYERS,
} from "../actions/types";

const INITIAL_STATE = {
  matches: [],
  selectedMatch: null,
  team1: [],
  team2: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MATCHES_BY_LEAGUE:
      return {
        ...state,
        matches: action.payload
      };
    case GET_TAEM_PLAYERS:
      return {
        ...state,
        team1: action.payload.team1,
        team2: action.payload.team2,
      };
    case GET_FIRST_TAEM_PLAYERS:
      return {
        ...state,
        team1: action.payload
      };
    case GET_SECOND_TAEM_PLAYERS:
      return {
        ...state,
        team2: action.payload
      };
    default:
      return state;
  }
}