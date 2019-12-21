import {
  SET_LIST_PLAYER,
  SHOW_LIST_MODEL,
  REMOVE_LIST_MODEL,
  SUB_FLAG,
  PLAYING_FLAG,
  SET_LIST_TO_DEFAULTS,
  SET_LIST_REPLACE_FLAG,
} from "./types";

export const selectPlayer = (player) => {
  return {
    type: SET_LIST_PLAYER,
    payload: player
  }
}
export const showListModel = () => {
  return {
    type: SHOW_LIST_MODEL,
  }
}
export const removeListModel = () => {
  return {
    type: REMOVE_LIST_MODEL,
  }
}
export const subFlag = (player) => {
  return {
    type: SUB_FLAG,
    payload: player,
  }
}
export const playingFlag = (player) => {
  return {
    type: PLAYING_FLAG,
    payload: player,
  }
}
export const setListToDefaul = (player) => {
  return {
    type: SET_LIST_TO_DEFAULTS,
  }
}
export const setListReplaceFlag = (player) => {
  return {
    type: SET_LIST_REPLACE_FLAG,
  }
}