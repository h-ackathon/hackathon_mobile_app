import {
  SET_ACTIVE_ROUTE,
  SET_HEADER_TITLE,
} from '../actions/types';

const INITIAL_STATE = {
  activeRoute: '',
  headerTitle: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_ROUTE:
      return {
        ...state,
        activeRoute: action.payload,
      }
    case SET_HEADER_TITLE:
      return {
        ...state,
        headerTitle: action.payload,
      }
    default:
      return state;
  }
}