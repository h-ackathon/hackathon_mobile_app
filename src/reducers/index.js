import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import RouterComponent from './RoutesReducer';
import NewsReducer from './NewsReducer';
import TeamsReducer from './TeamsReducer';
import FantasyReducer from './FantasyReducer';
import LeaguePlayersReducer from './LeaguePlayersReducer';

export default combineReducers({
  home: HomeReducer,
  router: RouterComponent,
  news: NewsReducer,
  teams: TeamsReducer,
  fantasyList: FantasyReducer,
  leaguePlayers: LeaguePlayersReducer,
});