
import {
  GET_ODI_TEAM_RANKINGS,
  GET_TEST_TEAM_RANKINGS,
} from "./types";


export const odiTeamsRanking = () => {
  return async dispatch => {
    await fetch('http://192.168.43.226:3000/api/teams',
    {
    	method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((responseData) => {
      // console.log("RESULT FROM TEAMS ACITON:--", responseData);
      dispatch({
        type: GET_ODI_TEAM_RANKINGS,
        payload: responseData.teams,
      });
    })
    .catch(error => console.warn(error));
  }
}
export const testTeamsRanking = () => {
  return async dispatch => {
    await fetch('http://192.168.43.226:3000/api/teams',
    {
    	method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((responseData) => {
      // console.log("RESULT FROM TEAMS ACITON:--", responseData);
      dispatch({
        type: GET_TEST_TEAM_RANKINGS,
        payload: responseData.teams,
      });
    })
    .catch(error => console.warn(error));
  }
}