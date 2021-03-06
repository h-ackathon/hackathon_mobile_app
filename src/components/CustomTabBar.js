import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';
import { connect } from 'react-redux';
import { setActiveRoute } from "../actions";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class CustomTabBar extends React.Component {

  componentDidMount() {
    this.props.setActiveRoute("Dashboard");
  }

  setActiveBorder = (activeTabIndex, i) => {
    if (activeTabIndex == i) {
      return "#EA247B";
    }
    return "#000";
  }
  setActiveBorderWidth = (activeTabIndex, i) => {
    if (activeTabIndex == i) {
      return 3;
    }
    return 0;
  }

  render() {
    const { state } = this.props.navigation;
    const activeTabIndex = state.index;

    // console.log(state);
    // console.log(this.props.navigation.state.routeName);

    return (
      <CardSection style={{
        paddingBottom: 15,
        paddingTop: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        // backgroundColor: '#001F3F',
        // backgroundColor: '#46044D',
        backgroundColor: '#fff',
      }}>
        {
          state.routes.map((element, i) => (
            <TouchableOpacity style={{
              // backgroundColor: this.setActiveWidth(activeTabIndex, i),
              paddingTop: 15,
              paddingTop: 10,
              flex: 1, 
              alignItems: 'center',
              borderTopWidth: this.setActiveBorderWidth(activeTabIndex, i),
              borderTopColor: this.setActiveBorder(activeTabIndex, i),
            }} key={element.key} onPress={() => Actions[element.key]()}>
              {element.key === "latest" ?
                <SimpleLineIcons
                style={activeTabIndex == i ? styles.activeStyle : styles.textStyle}
                name={this.props.icons.news}
                size={19}
              /> : element.key === "rankings" ?
              <SimpleLineIcons
                style={activeTabIndex == i ? styles.activeStyle : styles.textStyle}
                name={this.props.icons.ranking}
                size={19}
              /> :
              <MaterialIcons
                style={activeTabIndex == i ? styles.activeStyle : styles.textStyle}
                name="cricket"
                size={19}
              />
              }
              <Text style={activeTabIndex == i ? styles.activeStyle : styles.textStyle}>{element.key.toUpperCase()}</Text>
            </TouchableOpacity>
          ))
        }
      </CardSection>
    );
  }
}

const styles = {
  activeStyle: {
    // color: '#fff',
    // color: '#EA247B',
    color: '#46044D',
    fontWeight: "600"
  },
  textStyle: {
    // color: '#fff',
    fontWeight: "500",
    color: 'gray',
  }
}

const mapStateToProps = state => {
  return {
    activeRoute: state.routes.activeRoute,
  }
}

export default connect(null, { setActiveRoute })(CustomTabBar);