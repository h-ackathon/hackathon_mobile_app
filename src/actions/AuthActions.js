import {
  LOGIN_INPUT_CHANGE,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  SET_ACTIVE_USER,
} from "./types";
import CricketApi from '../apis/CricketApis';
import { Actions } from "react-native-router-flux";
import AsyncStorage from '@react-native-community/async-storage';

export const inputChange = ({ prop, value }) => {
  return {
    type: LOGIN_INPUT_CHANGE,
    payload: { prop, value }
  }
}

export const login = (email, password) => {
  return dispatch => {
    const params = {
      email: email,
      password: password,
    }
    dispatch({ type: LOGIN_USER });
    CricketApi.put('/login', params).then((result) => {
      if (result.data.status == 200) {
        storeUserData(result.data.response);
        getUserData();
        dispatch({ type: LOGIN_USER_SUCCESS, payload: result.data.response });
        Actions.pop();
      } else {
        dispatch({ type: LOGIN_USER_FAILURE, payload: result.data.message });
      }
    }).catch((err) => {
      console.log(err);
    });
  }
}

const storeUserData = async (user) => {
  try {
    await AsyncStorage.setItem('loggedUser', JSON.stringify(user))
  } catch (e) {
    // saving error
  }
}
const getUserData = async () => {
  try {
    const value = await AsyncStorage.getItem('loggedUser');
    if (value !== null) {
      console.log("VALUE AFTER GET:---", JSON.parse(value));
    }
  } catch (e) {
    // error reading value
  }
}

export const setActiveUser = () => {
  return async dispatch => {
    const value = await AsyncStorage.getItem('loggedUser');
    if (value !== null) {
      dispatch({
        type: SET_ACTIVE_USER,
        payload: JSON.parse(value)
      });
    }
  }
}