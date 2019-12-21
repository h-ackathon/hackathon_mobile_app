import {
  SET_LIST_PLAYER,
  SHOW_LIST_MODEL,
  REMOVE_LIST_MODEL,
  SUB_FLAG,
  PLAYING_FLAG,
  SET_LIST_TO_DEFAULTS,
} from "../actions/types";

const INITIAL_STATE = {
  selectedPlayer: null,
  showListModel: false,
  replacePress: false,
  subSelected: false,
  selectedSub: null,
  playingSelected: false,
  selectedPlaying: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LIST_PLAYER:
      return { ...state, selectedPlayer: action.payload };
    case SHOW_LIST_MODEL:
      return {
        ...state,
        showListModel: true
      };
    case REMOVE_LIST_MODEL:
      return {
        ...state,
        showListModel: false
      };
    case SET_LIST_TO_DEFAULTS:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case SUB_FLAG:
      return {
        ...state,
        replacePress: true,
        subSelected: true,
        selectedSub: action.payload,
        playingSelected: false,
        selectedPlaying: null,
      };
    case PLAYING_FLAG:
      return {
        ...state,
        replacePress: true,
        subSelected: false,
        selectedSub: null,
        playingSelected: true,
        selectedPlaying: action.payload,
      };
    default:
      return state;
  }
}