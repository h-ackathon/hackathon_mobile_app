import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import RouterComponent from './RoutesReducer';
import NewsReducer from './NewsReducer';
import TeamsReducer from './TeamsReducer';
import FantasyReducer from './FantasyReducer';
import LeaguePlayersReducer from './LeaguePlayersReducer';
import UserTeamReducer from './UserTeamReducer';
import PlayerOptionsReducer from './PlayerOptionsReducer';
import PlayerListOptionsReducer from './PlayerListOptionsReducer';
import CommonTasksReducer from './CommonTasksReducer';
import MatchesReducer from './MatchesReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
  home: HomeReducer,
  router: RouterComponent,
  news: NewsReducer,
  teams: TeamsReducer,
  fantasyList: FantasyReducer,
  leaguePlayers: LeaguePlayersReducer,
  userTeam: UserTeamReducer,
  playerOptions: PlayerOptionsReducer,
  playerListOptions: PlayerListOptionsReducer,
  common: CommonTasksReducer,
  matches: MatchesReducer,
  auth: AuthReducer,
});