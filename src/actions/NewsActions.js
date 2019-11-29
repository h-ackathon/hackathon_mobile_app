import {
  NEWS_LIST
} from "./types";
import CricketApi from '../apis/CricketApis';

export const newsList = () => {
  return async dispatch => {
    CricketApi.get('/latestnews').then((result) => {
      dispatch({
        type: NEWS_LIST,
        payload: result.data.news,
      });
    });
  }
}
