import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import {
  getMatchesByLeague
} from "../actions";
import ListItem from './UpcomingMatchesListItem';

class UpcomingMatches extends React.Component {

  componentDidMount() {
    this.props.getMatchesByLeague(this.props.leagueId);
  }

  render() {
    return (
      <View style={{ backgroundColor: '#fff' }}>
        {this.props.matches.map((match, i) => {
          return (
            <View
              style={{
                flexDirection: 'column',
              }}
              key={i}
            >
              <ListItem match={match} matchId={match._id} />
            </View>
          );
        })}
      </View>
    )
  }
}

const mapStateToProps = state => {
  const { matches } = state.matches;
  return {
    matches,
  };
}

export default connect(mapStateToProps, { getMatchesByLeague })(UpcomingMatches);