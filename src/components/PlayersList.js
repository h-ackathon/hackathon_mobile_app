import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { getPlayersByFantasy } from "../actions";
import { CardSection } from './common';

class PlayersList extends React.Component {

  componentDidMount() {
    this.props.getPlayersByFantasy(this.props.leagueId);
  }

  renderBowlerContent = () => {
    return (
      this.props.bowlerArray && this.props.bowlerArray.map((player, i) => {
        return (
          <View key={i}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              backgroundColor: "#fff",
              paddingHorizontal: 5,
              paddingVertical: 2,
            }}
          >
            <View>
              <Image style={{
                width: 30,
                height: 30,
              }} source={{ uri: player.player.avatar_path }} />
            </View>
            <View style={{
              flexDirection: 'column',
            }}>
              <Text>{player.player.name}</Text>
              <Text>{player.name}</Text>
            </View>
          </View>
        );
      })
    )
  }
  renderBatsmanContent = () => {
    return (
      this.props.batsmanArray && this.props.batsmanArray.map((player, i) => {
        return (
          <View key={i}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              backgroundColor: "#fff",
              paddingVertical: 2,
              paddingHorizontal: 5,
            }}
          >
            <View>
              <Image style={{
                width: 30,
                height: 30,
              }} source={{ uri: player.player.avatar_path }} />
            </View>
            <View style={{
              flexDirection: 'column',
            }}>
              <Text>{player.player.name}</Text>
              <Text>{player.name}</Text>
            </View>
          </View>
        );
      })
    )
  }
  renderAllRounderContent = () => {
    return (
      this.props.allRounderArray && this.props.allRounderArray.map((player, i) => {
        return (
          <View key={i}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              backgroundColor: "#fff",
              paddingVertical: 2,
              paddingHorizontal: 5,
            }}
          >
            <View>
              <Image style={{
                width: 30,
                height: 30,
              }} source={{ uri: player.player.avatar_path }} />
            </View>
            <View style={{
              flexDirection: 'column',
            }}>
              <Text>{player.player.name}</Text>
              <Text>{player.name}</Text>
            </View>
          </View>
        );
      })
    )
  }
  renderWicketKeeperContent = () => {
    return (
      this.props.wicketKeeperArray && this.props.wicketKeeperArray.map((player, i) => {
        return (
          <View key={i}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              backgroundColor: "#fff",
              paddingVertical: 2,
              paddingHorizontal: 5,
            }}
          >
            <View>
              <Image style={{
                width: 30,
                height: 30,
              }} source={{ uri: player.player.avatar_path }} />
            </View>
            <View style={{
              flexDirection: 'column',
            }}>
              <Text>{player.player.name}</Text>
              <Text>{player.name}</Text>
            </View>
          </View>
        );
      })
    )
  }

  render() {
    console.log(this.props);
    return (
      <ScrollView>

        <View>
          <Text
            style={{
              fontSize: 16,
              paddingVertical: 5,
              paddingHorizontal: 5,
              fontWeight: "600",
              color: '#fff'
            }}>Batsman</Text>
          {this.renderBatsmanContent()}
        </View>
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: '#fff'
            }}>Bowler</Text>
          {this.renderBowlerContent()}
        </View>
        <View>
          <Text
            style={{
              fontSize: 16,
              paddingVertical: 5,
              paddingHorizontal: 5,
              fontWeight: "600",
              color: '#fff'
            }}>All Rounder</Text>
          {this.renderAllRounderContent()}
        </View>
        <View>
          <Text
            style={{
              fontSize: 16,
              paddingVertical: 5,
              paddingHorizontal: 5,
              fontWeight: "600",
              color: '#fff'
            }}>Wicket Keeper</Text>
          {this.renderWicketKeeperContent()}
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  const { allPlayers } = state.leaguePlayers;
  let bowlerArray = [];
  let batsmanArray = [];
  let allRounderArray = [];
  let wicketKeeperArray = [];
  if (allPlayers) {
    for (let i = 0; i < allPlayers.length; i++) {
      if (allPlayers[i].player.is_bowler) {
        bowlerArray.push(allPlayers[i])
      }
      if (allPlayers[i].player.is_batsman) {
        batsmanArray.push(allPlayers[i])
      }
      if (allPlayers[i].player.is_all_rounder) {
        allRounderArray.push(allPlayers[i])
      }
      if (allPlayers[i].player.is_wicket_keeper) {
        wicketKeeperArray.push(allPlayers[i])
      }
    }
  }
  return {
    allPlayers,
    bowlerArray,
    batsmanArray,
    allRounderArray,
    wicketKeeperArray,
  };
};

export default connect(mapStateToProps, { getPlayersByFantasy })(PlayersList);