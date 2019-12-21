import {
  SET_SELECTED_PLAYER,
  SELECT_PLAYING_FROM_SUB,
  SELECT_SUB_FROM_PLAYING,
  SET_SQUAD_TO_DEFAULT,
  REPLACE_BUTTON_PRESS,
  CLOSE_BUTTON_PRESS,
  SET_REPLACE_FLAG,
  SHOW_REPLACE_MODAL,
} from "../actions/types";

const INITIAL_STATE = {
  selectedPlayer: null,
  selectedSub: null,
  subSelected: false,
  selectedPlaying: null,
  playingSelected: false,
  showModal: false,
  replacePress: false,
}


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SELECTED_PLAYER:
      return {
        ...state,
        selectedPlayer: action.payload,
      };
    case SET_SQUAD_TO_DEFAULT:
      return {
        ...state,
        ...INITIAL_STATE
      };
    case SELECT_SUB_FROM_PLAYING:
      return {
        ...state,
        selectedPlaying: action.payload,
        playingSelected: true,
        selectedSub: null,
        subSelected: false,
      };
    case SELECT_PLAYING_FROM_SUB:
      return {
        ...state,
        selectedSub: action.payload,
        subSelected: true,
        playingSelected: false,
        selectedPlaying: null,
      };
    case REPLACE_BUTTON_PRESS:
      return {
        ...state,
        replacePress: true,
        showModal: false
      };
    case SET_REPLACE_FLAG:
      return {
        ...state,
        replacePress: true,
      };
    case SHOW_REPLACE_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case CLOSE_BUTTON_PRESS:
      return {
        ...state,
        showModal: false
      };
    default:
      return state;
  }
}