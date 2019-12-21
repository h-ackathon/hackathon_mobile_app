import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {
  getMatchesByLeague
} from "../actions";
import { Actions } from 'react-native-router-flux';
import { GET_TEAM_LOGO } from '../Commons';

class UpcomingMatchesListItem extends React.Component {

  render() {
    return (
      <TouchableOpacity onPress={() => Actions.matchDetails({ match: this.props.match })}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingVertical: 10,
            alignItems: 'center',
          }}
        >
          <Text style={{
            fontWeight: '500',
            fontFamily: 'AppleSDGothicNeo-Medium',
          }}>{this.props.match.teams[0].substring(0, 3).toUpperCase()}</Text>
          <Image style={{
            width: 30,
            height: 30, resizeMode: 'contain',
            marginHorizontal: 7,
          }} source={{ uri: GET_TEAM_LOGO(this.props.match.teams[0]) }} />
          <Text style={{
            borderColor: '#969696',
            color: '#969696',
            borderWidth: 1,
            fontFamily: 'AppleSDGothicNeo-Medium',
            marginHorizontal: 7,
            paddingHorizontal: 3,
          }}>3:30</Text>
          <Image style={{
            width: 30,
            height: 30, resizeMode: 'contain',
            marginHorizontal: 7,
          }} source={{ uri: GET_TEAM_LOGO(this.props.match.teams[1]) }} />
          <Text style={{
            fontWeight: '500',
            fontFamily: 'AppleSDGothicNeo-Medium',
          }}>{this.props.match.teams[1].substring(0, 3).toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { selectedMatch } = state.matches;
  return {
    isSelected: selectedMatch === ownProps.matchId,
  };
}

export default connect(null, { getMatchesByLeague })(UpcomingMatchesListItem);