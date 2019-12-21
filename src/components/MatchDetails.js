import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import {
  getPlayersByTeams,
  setHeaderTitle,
} from "../actions";

class MatchDetail extends React.Component {

  state = {
    active: null,
  }

  getPlayerType = (player) => {
    if (player.is_batsman) {
      return (
        <Text style={{
          // position: 'absolute',
          // right: 4,
          padding: 3,
          width: 80,
          // top: 4,
          fontSize: 10,
          fontWeight: "600",
          color: "#969696",
          textAlign: "left",
          // backgroundColor: '#06FA88',
        }}>Batsman</Text>
      )
    }
    if (player.is_bowler) {
      return (
        <Text style={{
          // position: 'absolute',
          // right: 4,
          padding: 3,
          width: 80,
          // top: 4,
          fontSize: 10,
          fontWeight: "600",
          color: "#969696",
          textAlign: "left",
          // backgroundColor: '#FF2883',
        }}>Bowler</Text>
      )
    }
    if (player.is_wicket_keeper) {
      return (
        <Text style={{
          // position: 'absolute',
          // right: 4,
          padding: 3,
          width: 80,
          // top: 4,
          fontSize: 10,
          fontWeight: "600",
          color: "#969696",
          textAlign: "left",
          // backgroundColor: '#EBFC02',
        }}>Wicket Keeper</Text>
      )
    }
    if (player.is_all_rounder) {
      return (
        <Text style={{
          // position: 'absolute',
          // right: 4,
          padding: 3,
          width: 80,
          // top: 4,
          fontSize: 10,
          fontWeight: "600",
          color: "#969696",
          textAlign: "left",
          // backgroundColor: '#04F0FE',
        }}>All Rounder</Text>
      )
    }
  }

  componentDidMount() {
    // this.props.setHeaderTitle(this.props.match.teams[0]+' VS. '+this.props.match.teams[1]);
    this.props.getPlayersByTeams(this.props.match.teams);
    this.setState({
      active: this.props.match.teams[0],
    });
  }

  render() {
    return (
      <View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingVertical: 15,
          // backgroundColor: '#fff',
        }}>
          <TouchableOpacity style={this.state.active == this.props.match.teams[0] ? {
            borderWidth: 1,
            borderColor: 'pink',
            width: 100,
            alignItems: 'center',
            padding: 10,
          } : {
              borderWidth: 0,
              alignItems: 'center',
              padding: 10,
            }
          } onPress={() => this.setState({ active: this.props.match.teams[0] })}>
            <Text style={this.state.active == this.props.match.teams[0] ? {
              color: '#fff',
            } : {
                color: '#FF2883',
              }
            }>{this.props.match.teams[0].substring(0, 3).toUpperCase()}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={this.state.active == this.props.match.teams[1] ? {
            borderWidth: 1,
            borderColor: 'pink',
            width: 100,
            alignItems: 'center',
            padding: 10,
          } : {
              borderWidth: 0,
              alignItems: 'center',
              padding: 10,
            }
          } onPress={() => this.setState({ active: this.props.match.teams[1] })}>
            <Text style={this.state.active == this.props.match.teams[1] ? {
              color: '#fff',
            } : {
                color: '#FF2883',
              }
            }>{this.props.match.teams[1].substring(0, 3).toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          backgroundColor: '#fff',
        }}>
          {this.state.active == this.props.match.teams[0] ?
            <ScrollView>
              {this.props.team1.map((player, i) => {
                return (
                  <View key={i} style={{
                    marginVertical: 8,
                    paddingHorizontal: 5,
                    borderBottomWidth: 1,
                    borderBottomColor: '#ebebeb',
                    paddingBottom: 5,
                  }}>
                    <Text style={{ paddingBottom: 5 }}>{player.name}</Text>
                    {this.getPlayerType(player)}
                  </View>
                );
              })}
            </ScrollView> :
            <ScrollView>
              {this.props.team2.map((player, i) => {
                return (
                  <View key={i} style={{
                    marginVertical: 8,
                    paddingHorizontal: 5,
                    borderBottomWidth: 1,
                    borderBottomColor: '#ebebeb',
                    paddingBottom: 5,
                  }}>
                    <Text style={{ paddingBottom: 5 }}>{player.name}</Text>
                    {this.getPlayerType(player)}
                  </View>
                );
              })}
            </ScrollView>
          }
        </View>
      </View>
    );
  };
}

const mapStateToProps = state => {
  const { team1, team2 } = state.matches;
  return {
    team1,
    team2,
  };
};

export default connect(
  mapStateToProps,
  {
    getPlayersByTeams,
    setHeaderTitle,
  }
)(MatchDetail);