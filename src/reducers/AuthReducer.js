import {
  LOGIN_INPUT_CHANGE,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  SET_ACTIVE_USER,
} from "../actions/types";

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  phone: '',
  user: null,
  errorMsg: '',
  loading: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_INPUT_CHANGE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case LOGIN_USER:
      return { ...state, loading: true, errorMsg: '' };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        errorMsg: '',
        loading: false,
        user: action.payload,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        errorMsg: action.payload,
        loading: false,
      };
    case SET_ACTIVE_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}