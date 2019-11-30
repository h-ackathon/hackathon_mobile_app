import React from 'react';
import { Text, View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Standings from './Standings';
import { CardSection, SectionTopBorder } from './common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { setHeaderTitle } from "../actions";
import { Actions } from 'react-native-router-flux';

class FantasyDetail extends React.Component {
  componentDidMount(){
    this.props.setHeaderTitle(this.props.league.name);
  }
  render() {
    return (
      <ScrollView>
        {/* <Text
          style={{
            fontStyle: 'italic',
            fontWeight: "600", fontSize: 20,
            color: '#EA247B', paddingHorizontal: 10,
            paddingBottom: 20, paddingTop: 20,
          }}
        >
          {this.props.league.name}
        </Text> */}
        <CardSection
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 3,
            marginBottom: 10,
          }}
        >
          <TouchableWithoutFeedback>
            <Text>Pick Team</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <MaterialCommunityIcons name="arrow-right" size={20} />
          </TouchableWithoutFeedback>
        </CardSection>

        <CardSection
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 3,
            marginBottom: 30,
          }}
        >
          <TouchableWithoutFeedback onPress={()=>Actions.playersList({leagueId: this.props.league.key})}>
            <Text>Transfers</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <MaterialCommunityIcons name="arrow-right" size={20} />
          </TouchableWithoutFeedback>
        </CardSection>
        <View>
          <SectionTopBorder />
          <Text style={{
            fontSize: 16,
            fontWeight: "500",
            backgroundColor: '#fff',
            padding: 12,
          }}>Leangue Standings</Text>
          <Standings />
        </View>
      </ScrollView>
    )
  }
}

export default connect(null, {setHeaderTitle})(FantasyDetail);