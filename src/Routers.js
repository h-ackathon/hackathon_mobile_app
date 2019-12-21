import {
  Scene,
  Modal,
  Actions,
  Stack,
  Tabs,
  Router
} from 'react-native-router-flux';
import React from 'react';
import { Text, Platform, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import Home from './components/Home';
import News from './components/News';
import IosFonts from './components/IosFonts';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import MatchDetails from './components/MatchDetails';
import TestRankings from './components/TestRankings';
import CustomTabBar from './components/CustomTabBar';
import RankingTabBar from './components/RankingTabBar';
import DrawerContent from "./components/DrawerContent";
import AllNews from "./components/AllNews";
import OdiRankings from "./components/OdiRankings";
import FantasyList from "./components/FantasyList";
import FantasyDetails from "./components/FantasyDetails";
import UserFantasyTeam from "./components/UserFantasyTeam";
import UserPlayingTeam from "./components/UserPlayingTeam";
import PlayersList from "./components/PlayersList";
import NavBar from "./components/NavBar";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LineIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { setSquadToDefault, restoreChanges, resetRenderShuffleTeam } from "./actions";

const tabStyles = {
  color: "red"
}

class RouterComponent extends React.Component {

  renderBackButton = () => {
    return (
      <TouchableWithoutFeedback onPress={() => Actions.pop()}>
        <MaterialIcon name="arrow-left" style={{ marginLeft: 8 }} size={20} color="#fff" />
      </TouchableWithoutFeedback>
    )
  }

  tabBarOnPress = () => {
    this.props.setSquadToDefault();
    this.props.resetRenderShuffleTeam();
    this.props.restoreChanges();
  }

  renderScenes = () => {
    return (
      Actions.create(
        <Modal>
          <Stack
            key="drawer"
            drawerIcon={<LineIcon name="menu" size={20} color="#fff" />}
            drawer
            drawerPosition="left"
            drawerWidth={300}
            contentComponent={DrawerContent}
            hideNavBar
          >
            <Scene
              key="root"
              // rightTitle={this.props.user ? "Welcome" : "NO USER"}
              // onRight={() => console.log("RIGHT PRESSED")}
              navigationBarStyle={{ backgroundColor: '#37003C' }}
              titleStyle={{ color: 'white', alignSelf: 'center' }}
              cardStyle={{ backgroundColor: '#37003C' }}
            >
              <Scene title="Home" key="home" component={Home} />
              <Scene
                tabs
                key="tabBar"
                wrap={Platform.OS === 'ios' ? false : true}
                tabBarComponent={CustomTabBar}
                icons={{ news: "book-open", ranking: "graph", }}
                navigationBarStyle={{ backgroundColor: '#37003C', }}
                hideNavBar={Platform.OS === 'ios' ? false : true}
                initial
              >
                <Scene key="latest"
                  component={News} title="Latest" />
                <Scene title="Rankings" key="rankings"
                  tabBarPosition={Platform.OS == 'ios' ? "top" : "bottom"}
                  activeBackgroundColor="white"
                  tabBarComponent={CustomTabBar}
                  inactiveBackgroundColor="rgba(255, 0, 0, 0.5)"
                  tabBarStyle={{ position: 'absolute', top: 0, zIndex: 9999999, backgroundColor: 'purple' }}
                  tabs
                >
                  <Scene key="odi" component={OdiRankings}
                    title="ODI" />
                  <Scene key="test" component={TestRankings}
                    title="Test" />
                  <Scene key="t20" component={TestRankings}
                    title="T20" />
                  <Scene key="ios" component={IosFonts}
                    title="IOS" />
                </Scene>
                <Scene
                  key="fantasy"
                  title="Fantasy"
                  component={FantasyList}
                  back
                  renderBackButton={() => this.renderBackButton()}
                />
              </Scene>
              <Scene
                key="fantasyDetails"
                title="League Details"
                component={FantasyDetails}
                navBar={NavBar}
              />
              <Scene
                key="playersList"
                title="Transfers"
                component={PlayersList}
                back
                renderBackButton={() => this.renderBackButton()}
              />
              <Scene
                key="userTeam"
                title="Pick Team"
                back
                renderBackButton={() => this.renderBackButton()}
                tabs
                wrap={false}
                tabBarComponent={RankingTabBar}
              >
                <Scene
                  key="squadPlaying"
                  title="Squad"
                  component={UserPlayingTeam}
                  onExit={() => this.tabBarOnPress()}
                />
                <Scene
                  key="listPlaying"
                  title="Playing"
                  component={UserFantasyTeam}
                  onExit={() => this.tabBarOnPress()}
                />
              </Scene>
              <Scene key="matchDetails"
                title="Details"
                component={MatchDetails}
                back
                // navBar={NavBar}
                renderBackButton={() => this.renderBackButton()}>
              </Scene>
              <Scene key="allnews"
                title="NEWS"
                component={AllNews} back
                renderBackButton={() => this.renderBackButton()}>
              </Scene>
              <Scene key="allvideos"
                title="VIDEOS"
                component={AllNews} back
                renderBackButton={() => this.renderBackButton()}>
              </Scene>
            </Scene>
          </Stack>
          <Scene key="login" title="Login" component={LoginForm} />
          <Scene key="register" title="Register" component={SignUpForm} />
        </Modal>
      )
    );
  }


  render() {
    return (
      <Router scenes={this.renderScenes()} />
    );
  }
}

const mapStateToProps = state => {

  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(
  null,
  {
    setSquadToDefault,
    resetRenderShuffleTeam,
    restoreChanges
  }
)(RouterComponent);