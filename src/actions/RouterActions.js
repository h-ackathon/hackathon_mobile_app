import { 
  SET_ACTIVE_ROUTE,
  SET_HEADER_TITLE
 } from "./types";

export const setActiveRoute = (name) => {
  return {
    type: SET_ACTIVE_ROUTE,
    payload: name,
  };
}
export const setHeaderTitle = (title) => {
  return {
    type: SET_HEADER_TITLE,
    payload: title,
  };
}