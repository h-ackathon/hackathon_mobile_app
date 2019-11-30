import {
  GET_ODI_TEAM_RANKINGS,
  GET_TEST_TEAM_RANKINGS,
} from "./types";
import CricketApi from "../apis/CricketApis";

export const odiTeamsRanking = () => {
  return async dispatch => {
    CricketApi.get('/testrankings').then(function (result) {
      dispatch({
        type: GET_ODI_TEAM_RANKINGS,
        payload: result.data.teams,
      });
    });
  }
}

export const testTeamsRanking = () => {
  return async dispatch => {
    CricketApi.get('/testrankings').then(function (result) {
      dispatch({
        type: GET_TEST_TEAM_RANKINGS,
        payload: result.data.teams,
      });
    });
  }
}