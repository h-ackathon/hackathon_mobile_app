import {
  ADD_USER_PLAYER,
  REMOVE_USER_PLAYER,
  SWAP_PLAYERS,
  RESTORE_PREVIOUS_CHANGES,
  STORE_SELECTED_PLAYER_ID,
  BACK_FROM_ALL_PLAYERS,
  REMOVE_PLAYER_FROM_ARRAY,
  CHANGE_TEAM_NAME,
  SET_ERROR_MSG,
  SET_QUERY_DATA,
  CLEAR_ALL_DATA,
  CLEAR_ERROR_MSG,
  ADD_ACTION_SPINNER,
  REMOVE_ACTION_SPINNER,
} from "../actions/types";

const INITIAL_STATE = {
  playersId: [],
  playersData: [],
  restoreIds: [],
  restoreData: [],
  name: null,
  userTeamId: null,
  errorMsg: null,
  selectedPlayerId: [],
  loading: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER_PLAYER:
      let p = state.playersId.length < 11 ? { ...action.payload.player, is_playing: true }
        : { ...action.payload.player, is_playing: false };
      if (state.playersId.indexOf(p._id) < 0 && state.playersId.length < 15) {
        return {
          ...state,
          playersData: state.playersData.concat([p]),
          playersId: state.playersId.concat([action.payload.playerId]),
        };
      } else {
        return { ...state };
      };
    case SWAP_PLAYERS:
      return {
        ...state,
        playersData: state.playersData.map(function (pl) {
          if (pl._id == action.payload.player._id) {
            return {
              ...pl,
              is_playing: !pl.is_playing
            };
          };
          if (pl._id == action.payload.selectedPlayer._id) {
            return {
              ...pl,
              is_playing: !pl.is_playing
            };
          };
          return {
            ...pl
          };
        })
      };
    case SET_ERROR_MSG:
      return {
        ...state,
        errorMsg: action.payload,
      };
    case CLEAR_ERROR_MSG:
      return {
        ...state,
        errorMsg: null,
      };
    case CLEAR_ALL_DATA:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case REMOVE_USER_PLAYER:
      return {
        ...state,
        restoreData: action.payload,
      };
    case BACK_FROM_ALL_PLAYERS:
      return {
        ...state,
        restoreData: state.playersData.slice(),
        restoreIds: state.playersId.slice(),
      };
    case RESTORE_PREVIOUS_CHANGES:
      return {
        ...state,
        playersData: state.restoreData.slice(),
        playersId: state.restoreIds.slice(),
      };
    case STORE_SELECTED_PLAYER_ID:
      if (state.playersId.indexOf(action.payload) < 0)
        return {
          ...state,
          selectedPlayerId: state.selectedPlayerId.concat(action.payload),
        }
      return {
        ...state,
      }
    case REMOVE_PLAYER_FROM_ARRAY:
      let newArrayIndex = state.playersId.indexOf(action.payload._id);

      let newArray = state.playersData.slice();
      newArray.splice(newArrayIndex, 1);

      let newArrayPlayersId = state.playersId.slice();
      newArrayPlayersId.splice(newArrayIndex, 1);

      let newArraySelectedPlayerId = state.selectedPlayerId.slice();
      newArraySelectedPlayerId.splice(newArrayIndex, 1);

      var playCount = 0;
      var subCount = 0;
      newArray.forEach((item) => {
        item.is_playing ? playCount = playCount + 1 : subCount = subCount + 1
      });

      // console.log("PLAYER AT INDEX:--", newArrayIndex, playCount, subCount);
      // console.log("NEW ARRAY AFTER REMOVE:--", newArray, state.playersData);

      return {
        ...state,
        playersData: playCount < 11 ? newArray.map(function (item, i) {
          if (i < 11) {
            return {
              ...item,
              is_playing: true,
            }
          } else if (i > 10) {
            return {
              ...item,
              is_playing: false,
            }
          }
          return {
            ...item,
          }
        }) : newArray,
        playersId: newArrayPlayersId,
        selectedPlayerId: newArraySelectedPlayerId,
      };

    case SET_QUERY_DATA:
      return {
        ...state,
        playersId: action.payload.playersId.slice(),
        playersData: action.payload.playersData.slice(),
        restoreIds: action.payload.playersId.slice(),
        restoreData: action.payload.playersData.slice(),
        name: action.payload.name,
        userTeamId: action.payload.userTeamId,
      };
    case ADD_ACTION_SPINNER:
      return { ...state, loading: true };
    case REMOVE_ACTION_SPINNER:
      return { ...state, loading: false };
    case CHANGE_TEAM_NAME:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
}