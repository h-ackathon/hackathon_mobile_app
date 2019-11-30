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
import TestRankings from './components/TestRankings';
import CustomTabBar from './components/CustomTabBar';
import RankingTabBar from './components/RankingTabBar';
import DrawerContent from "./components/DrawerContent";
import AllNews from "./components/AllNews";
import OdiRankings from "./components/OdiRankings";
import FantasyList from "./components/FantasyList";
import FantasyDetails from "./components/FantasyDetails";
import NavBar from "./components/NavBar";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LineIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

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
              navigationBarStyle={{ backgroundColor: '#37003C' }}
              // navigationBarStyle={{ backgroundColor: '#001F3F' }}
              titleStyle={{ color: 'white', alignSelf: 'center' }}
              // headerMode="screen"
              // cardStyle= {{ backgroundColor: '#46044D' }}
              cardStyle={{ backgroundColor: '#37003C' }}
            // hideNavBar
            // navBar={NavBar}
            >
              <Scene title="Home" key="home" component={Home} />
              <Scene
                tabs
                key="tabBar"
                wrap={Platform.OS === 'ios' ? false : true}
                // wrap={Platform.OS === 'ios' ? false : true}
                // headerMode="screen"
                // renderTitle="Blog"
                // navBar={NavBar}
                // tabBarPosition="top"
                tabBarComponent={CustomTabBar}
                icons={{ news: "book-open", ranking: "graph", }}
                navigationBarStyle={{ backgroundColor: '#37003C', }}
                // navigationBarStyle={{ backgroundColor: '#46044D', }}
                hideNavBar={Platform.OS === 'ios' ? false : true}
                // hideNavBar
                initial
              >
                <Scene key="latest"
                  // hideNavBar={Platform.OS === 'ios' ? false : true} 
                  component={News} title="Latest" />
                <Scene title="Rankings" key="rankings"
                  tabBarPosition={Platform.OS == 'ios' ? "top" : "bottom"}
                  activeBackgroundColor="white"
                  tabBarComponent={CustomTabBar}
                  inactiveBackgroundColor="rgba(255, 0, 0, 0.5)"
                  // hideNavBar={Platform.OS === 'ios' ? false : true}
                  swipeEnabled={true}
                  scrollEnabled={true}
                  tabBarStyle={{ position: 'absolute', top: 0, zIndex: 9999999, backgroundColor: 'purple' }}
                  tabs
                >
                  <Scene key="odi" component={OdiRankings}
                    // hideNavBar={Platform.OS === 'ios' ? false : true}
                    title="ODI" />
                  <Scene key="test" component={TestRankings}
                    // hideNavBar={Platform.OS === 'ios' ? false : true}
                    title="Test" />
                  <Scene key="t20" component={TestRankings}
                    // hideNavBar={Platform.OS === 'ios' ? false : true}
                    title="T20" />
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
                // back
                // renderBackButton={() => this.renderBackButton()}
              />
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
        </Modal>
      )
    );
  }


  render() {
    return (
      <Router scenes={this.renderScenes()}
      // sceneStyle={{
      //   cardStyle: { backgroundColor: 'red' }
      // }}
      />
    );
  }
}

const mapStateToProps = state => {

  const { headerTitle } = state.router;
  return {
    headerTitle,
  };
}

export default connect(null, {})(RouterComponent);