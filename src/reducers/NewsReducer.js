import {
  NEWS_LIST
} from "../actions/types";

const INITIAL_STATE = {
  news: [],
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEWS_LIST:
      return { ...state, news: action.payload };
    default:
      return state;
  }
}