import {
  GET_ODI_TEAM_RANKINGS,
  GET_TEST_TEAM_RANKINGS,
} from "../actions/types";

const INITIAL_STATE = {
  odiTeams: [],
  testTeams: [],
  loading: false
}


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ODI_TEAM_RANKINGS:
      return {...state, odiTeams: action.payload};
    case GET_TEST_TEAM_RANKINGS:
      return {...state, testTeams: action.payload};
    default:
      return state;
  }
}