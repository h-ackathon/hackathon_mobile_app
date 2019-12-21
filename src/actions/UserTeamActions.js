import {
  ADD_USER_PLAYER,
  RENDER_SHUFFLE_TEAM,
  RESET_SHUFFLE_TEAM,
  SWAP_PLAYERS,
  SET_SELECTED_PLAYER,
  SELECT_PLAYING_FROM_SUB,
  SELECT_SUB_FROM_PLAYING,
  SET_SQUAD_TO_DEFAULT,
  REPLACE_BUTTON_PRESS,
  CLOSE_BUTTON_PRESS,
  SET_REPLACE_FLAG,
  SHOW_REPLACE_MODAL,
  RESTORE_PREVIOUS_CHANGES,
  REMOVE_USER_PLAYER,
  STORE_SELECTED_PLAYER_ID,
  BACK_FROM_ALL_PLAYERS,
  REMOVE_PLAYER_FROM_ARRAY,
  CHANGE_TEAM_NAME,
  SET_ERROR_MSG,
  CLEAR_ALL_DATA,
  CLEAR_ERROR_MSG,
  SET_QUERY_DATA,
  NEW_PLAYERS_ADDED,
  RESET_NEW_PLAYERS_ADDED,
  ADD_ACTION_SPINNER,
  REMOVE_ACTION_SPINNER,
} from "./types";
import CricketApi from '../apis/CricketApis';
import * as _ from 'lodash';


export const addUserPlayer = (player) => {
  let p = { ...player };
  return {
    type: ADD_USER_PLAYER,
    payload: { playerId: p._id, player: p }
  };
}

export const swapPlayers = (player, selectedPlayer) => {
  return {
    type: SWAP_PLAYERS,
    payload: { player, selectedPlayer },
  }
}

export const restoreOldData = (players) => {
  return {
    type: REMOVE_USER_PLAYER,
    payload: players,
  }
}

export const restoreChanges = () => {
  return {
    type: RESTORE_PREVIOUS_CHANGES,
  }
}

export const renderShuffleTeam = () => {
  return {
    type: RENDER_SHUFFLE_TEAM,
  }
}

export const resetRenderShuffleTeam = () => {
  return {
    type: RESET_SHUFFLE_TEAM,
  }
}

export const resetShuffleTeam = () => {
  return {
    type: RESET_SHUFFLE_TEAM,
  }
}

export const setSelectedPlayers = (player) => {
  return {
    type: SET_SELECTED_PLAYER,
    payload: player,
  }
}

export const getSubFromPlaying = (player) => {
  return {
    type: SELECT_SUB_FROM_PLAYING,
    payload: player,
  }
}

export const getPlayingFromSub = (player) => {
  return {
    type: SELECT_PLAYING_FROM_SUB,
    payload: player,
  }
}

export const setSquadToDefault = () => {
  return {
    type: SET_SQUAD_TO_DEFAULT,
  }
}

export const replaceButtonPress = () => {
  return {
    type: REPLACE_BUTTON_PRESS,
  }
}

export const closeButtonPress = () => {
  return {
    type: CLOSE_BUTTON_PRESS,
  }
}

export const setReplaceFlag = () => {
  return { type: SET_REPLACE_FLAG, }
}

export const showReplaceModal = () => {
  return { type: SHOW_REPLACE_MODAL, }
}

export const storeSelectedPlayerId = (id) => {
  return { type: STORE_SELECTED_PLAYER_ID, payload: id };
}


export const backFromAllPlayers = () => {
  return {
    type: BACK_FROM_ALL_PLAYERS,
  }
}

export const removePlayer = (player) => {
  return {
    type: REMOVE_PLAYER_FROM_ARRAY,
    payload: player
  }
}

export const changeTeamName = ({ prop, value }) => {
  return {
    type: CHANGE_TEAM_NAME,
    payload: { prop, value }
  }
}

export const setErrorMsg = (error) => {
  return {
    type: SET_ERROR_MSG,
    payload: error
  }
}
export const clearErrorMsg = () => {
  return {
    type: CLEAR_ERROR_MSG,
  }
}

export const clearAllData = () => {
  return {
    type: CLEAR_ALL_DATA,
  }
}
export const newPlayersAdded = () => {
  return {
    type: NEW_PLAYERS_ADDED,
  }
}
export const resetNewPlayersAdded = () => {
  return {
    type: RESET_NEW_PLAYERS_ADDED,
  }
}

export const saveUserTeam = (team, name, userId, userToken, leagueId) => {
  return dispatch => {
    const params = {
      players: team,
      name: name,
    }
    // const headers = {
    //   'x-access-token': userToken
    // }
    CricketApi.post('/create-user-team/' + leagueId + '/' + userId, params).then((result) => {
      console.log(result);
      dispatch({
        type: BACK_FROM_ALL_PLAYERS,
      });
    }).catch((err) => {
      console.log(err);
    });
  }
}

export const updateUserTeam = (teamId, teamName, teamPlayers) => {
  console.log(teamId, teamPlayers);
  return dispatch => {
    dispatch({
      type: ADD_ACTION_SPINNER,
    });
    const params = {
      userTeamId: teamId, players: teamPlayers, name: teamName
    }
    CricketApi.post('/updateuserteam', params).then((result) => {
      // console.log("RESULT FROM UPDATE:--", result);
      dispatch({
        type: BACK_FROM_ALL_PLAYERS,
      });
      dispatch({
        type: REMOVE_ACTION_SPINNER,
      });
    }).catch((err) => {
      console.log(err);
    })
  }
}

export const getUserTeam = (leagueId, userId) => {
  return dispatch => {
    dispatch({
      type: ADD_ACTION_SPINNER,
    });
    CricketApi.get('/getuserteam/?leagueId=' + leagueId + '&userId=' + userId).then((result) => {
      // console.log(result.data.response);
      if (result.data.response.length) {
        let name = result.data.response[0].name;
        let userTeamId = result.data.response[0]._id;
        let playersData = result.data.response[0].newplayer;
        let userTeam = result.data.response[0].players;
        let playersId = [];
        for (let i = 0; i < playersData.length; i++) {
          let key = _.find(userTeam, { _id: playersData[i]._id });
          // console.log("key:--\n", key);
          playersData[i].is_playing = key.is_playing;
          playersData[i].is_captain = key.is_captain;
          playersData[i].is_vice_captain = key.is_vice_captain;
          playersData[i].team = getPlayerTeam(playersData[i].teams, result.data.response[0].leagueteams)
          playersId.push(playersData[i]._id);
        }
        // console.log("Team Name:---", name, "\nNEW PLAYERS DATA:--\n", playersData, "\nPLAYERS IDS:---", playersId);
        dispatch({
          type: SET_QUERY_DATA,
          payload: { playersId, playersData, name, userTeamId }
        });
        dispatch({
          type: REMOVE_ACTION_SPINNER,
        });
      }
    }).catch((err) => {
      console.log(err);
    });
  }
}

const getPlayerTeam = (teams, leagueteams) => {
  let team = null;
  for (let i = 0; i < teams.length; i++) {
    team = _.find(leagueteams, { key: teams[i] })
    // console.log(team);
    if (team) {
      return team.name;
    }
  }
  // teams.forEach((team)=>{
  //   team = _.find(leagueteams, {key: team})
  // })
}