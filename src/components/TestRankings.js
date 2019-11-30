import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Card, CardSection } from './common';
import { connect } from 'react-redux';
import { testTeamsRanking } from "../actions";

class TestRankings extends React.Component {

  componentDidMount() {
    this.props.testTeamsRanking();
  }

  render() {
    return (
      <ScrollView>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            marginTop: 10,
          }}
        >
          {this.props.testTeams && this.props.testTeams.map((team, i) => {
            return (
              <View
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '50%',
                  backgroundColor: '#47054D',
                  // backgroundColor: '#46044D',
                  borderStyle: 'solid',
                  borderColor: '#37003C',
                  borderRadius: 8,
                  borderWidth: 5,
                  borderLeftWidth: i % 2 === 0 ? 10 : 5,
                  borderRightWidth: i % 2 !== 0 ? 10 : 5,
                }}
              >
                <View style={{
                  paddingVertical: 20,
                  paddingBottom: 0,
                }}>

                  <Image source={{ uri: team.imageUrl }} style={{ resizeMode: 'contain', width: 70, height: 70, }} />
                </View>
                <View
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    // backgroundColor: '#300134',
                    backgroundColor: '#300135',
                    width: "100%",
                    borderStyle: 'solid',
                    // borderColor: '#46044D',
                    borderColor: '#47054D',
                    borderWidth: 6,
                    borderRadius: 8,
                  }}>
                  <Text style={{
                    // color: '#EA247B',
                    color: '#FE1F7C',
                    alignSelf: "center",
                    fontWeight: "700",
                    fontSize: 26,
                  }}>{i + 1}</Text>

                  <Text style={{
                    fontSize: 15, fontWeight: "400", color: '#fff',
                    alignSelf: "center",
                  }}>{team.title}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  const { testTeams } = state.teams;
  return {
    testTeams,
  };
}

export default connect(mapStateToProps, { testTeamsRanking })(TestRankings);