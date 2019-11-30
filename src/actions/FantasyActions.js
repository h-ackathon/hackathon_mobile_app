import {
  GET_FANTASY_LIST,
  FANTASY_LIST_SPINNER,
  FANTASY_LIST_SUCCESS
} from './types';

import CricketApi from '../apis/CricketApis';

export const fantasyList = () => {
  return async dispatch => {
    dispatch({
      type: FANTASY_LIST_SPINNER
    });
    await CricketApi.get('/allLeagues').then((response) => {
      dispatch({
        type: FANTASY_LIST_SUCCESS
      });
      dispatch({
        type: GET_FANTASY_LIST,
        payload: response.data.response
      });
    });
  }
}

export const getPlayersByFantasy = (fantasyId) => {
  return dispatch => {
    CricketApi.get('/leagueplayers/?league='+fantasyId).then((result)=>{
      console.log('RESULT FROM ALL PLAYERS:--', result);
    });
  }
}