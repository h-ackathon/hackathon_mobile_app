import React from 'react';
import { Text, View, ScrollView, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import Standings from './Standings';
import { CardSection, SectionTopBorder } from './common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { setHeaderTitle } from "../actions";
import { Actions } from 'react-native-router-flux';
import UpcomingMatches from "./UpcomingMatches";

class FantasyDetail extends React.Component {
  componentDidMount() {
    this.props.setHeaderTitle(this.props.league.name);
  }
  render() {
    return (
      <ScrollView>
        <TouchableHighlight onPress={() => Actions.userTeam({ league: this.props.league })}>
          <CardSection
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 3,
              marginBottom: 30,
            }}
          >
            <Text style={{ fontFamily: 'AppleSDGothicNeo-Medium', }}>Pick Team</Text>
            <MaterialCommunityIcons name="arrow-right" size={20} />
          </CardSection>
        </TouchableHighlight>


        <View style={{
          marginBottom: 40,
        }}>
          <SectionTopBorder />
          <Text style={{
            fontSize: 14,
            fontWeight: "500",
            backgroundColor: '#fff',
            padding: 12,
          }}>Upcoming</Text>
          <UpcomingMatches leagueId={this.props.league.key} />
        </View>
        <View style={{
          marginBottom: 40,
        }}>
          <SectionTopBorder />
          <Text style={{
            fontSize: 14,
            fontWeight: "500",
            backgroundColor: '#fff',
            padding: 12,
          }}>Leangue Table</Text>
          <Standings />
        </View>

        <View>
          <Text style={{
            fontSize: 14,
            fontWeight: "500",
            backgroundColor: '#fff',
            padding: 12,
          }}>Your League Scores</Text>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  const { selectedLeague } = state.common;
  const league = selectedLeague;
  return {
    league,
  }
}

export default connect(mapStateToProps, { setHeaderTitle })(FantasyDetail);