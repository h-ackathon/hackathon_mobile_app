import {
  GET_FANTASY_LIST,
  FANTASY_LIST_SPINNER,
  FANTASY_LIST_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  allFantasy: [],
  loading: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_FANTASY_LIST:
      return { ...state, allFantasy: action.payload };
    case FANTASY_LIST_SPINNER:
      return { ...state, loading: true };
    case FANTASY_LIST_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
}