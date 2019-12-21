import {
  GET_MATCHES_BY_LEAGUE,
  GET_FIRST_TAEM_PLAYERS,
  GET_SECOND_TAEM_PLAYERS,
  GET_TAEM_PLAYERS,
} from "./types";
import CricketApi from '../apis/CricketApis';


export const getMatchesByLeague = (leagueId) => {
  return dispatch => {
    CricketApi.get('/leaguematches/?league=' + leagueId).then(function (result) {
      dispatch({
        type: GET_MATCHES_BY_LEAGUE,
        payload: result.data.response
      });
    });
  };
}

export const getPlayersByTeams = (teams) => {
  return dispatch => {
    CricketApi.get('/playersbymatch/?team=' + teams[0]).then(function (result) {
      getPlayersBySecondTeam(dispatch, teams[1], result.data.response);
    });
  }
}

const getPlayersBySecondTeam = (dispatch, team, team1) => {
  CricketApi.get('/playersbymatch/?team=' + team).then(function (result) {
    dispatch({
      type: GET_TAEM_PLAYERS,
      payload: { team1: team1, team2: result.data.response }
    });
  });
}