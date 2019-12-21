import React from 'react';
import { Text, View, TouchableWithoutFeedback, TouchableHighlight, Image } from 'react-native';
import { connect } from 'react-redux';
import {
  addUserPlayer,
  storeSelectedPlayerId,
  removePlayer,
  resetNewPlayersAdded,
} from "../actions";
import LineIcon from 'react-native-vector-icons/SimpleLineIcons';

class PlayerListItem extends React.Component {

  onPressAction = (playerTest) => {
    if (this.props.allteam) {
      this.props.addUserPlayer(playerTest);
      // this.props.storeSelectedPlayerId(playerTest._id);
    }
  }

  removePlayer = (player) => {
    // console.log("Player To Remove:--", player);
    // this.props.resetNewPlayersAdded();
    this.props.removePlayer(player);
  }

  getPlayerType = (player) => {
    if (player.is_batsman) {
      return (
        <Text style={{
          backgroundColor: 'red',
          position: 'absolute',
          right: 4,
          padding: 3,
          width: 65,
          top: 4,
          fontSize: 9,
          fontWeight: "600",
          color: "#000",
          textAlign: "center",
          backgroundColor: '#06FA88',
        }}>Batsman</Text>
      )
    }
    if (player.is_bowler) {
      return (
        <Text style={{
          backgroundColor: 'red',
          position: 'absolute',
          right: 4,
          padding: 3,
          width: 65,
          top: 4,
          fontSize: 9,
          fontWeight: "600",
          color: "#fff",
          textAlign: "center",
          backgroundColor: '#FF2883',
        }}>Bowler</Text>
      )
    }
    if (player.is_wicket_keeper) {
      return (
        <Text style={{
          backgroundColor: 'red',
          position: 'absolute',
          right: 4,
          padding: 3,
          width: 65,
          top: 4,
          fontSize: 9,
          fontWeight: "600",
          color: "#000",
          textAlign: "center",
          backgroundColor: '#EBFC02',
        }}>Wicket Keeper</Text>
      )
    }
    if (player.is_all_rounder) {
      return (
        <Text style={{
          backgroundColor: 'red',
          position: 'absolute',
          right: 4,
          padding: 3,
          width: 65,
          top: 4,
          fontSize: 9,
          fontWeight: "600",
          color: "#000",
          textAlign: "center",
          backgroundColor: '#04F0FE',
        }}>All Rounder</Text>
      )
    }
  }

  render() {

    // console.log("ALL PLAYERS PROPS:--", this.props.isSelected);
    var playerTest = this.props.player;
    playerTest.team = this.props.name;
    const name = this.props.name;

    return (
      <View>
        <TouchableWithoutFeedback
          onPress={
            () => this.onPressAction(playerTest)
          }
        >
          <View key={playerTest._id} style={[
            styles.mainContainer,
            this.props.isSelected ?
              { backgroundColor: 'red' } : null
          ]}>
            {!this.props.allteam ? this.getPlayerType(playerTest) : null}
            <View>
              <Image style={styles.imageStyles} source={{ uri: playerTest.avatar_path }} />
            </View>
            <View style={styles.nameConatiner}>
              <Text style={styles.nameStyles}>{playerTest.name}</Text>
              <Text style={styles.teamStyles}>{name}</Text>
            </View>
            {this.props.allteam && this.props.isSelected ?
              <TouchableWithoutFeedback
                onPress={
                  () => this.removePlayer(playerTest)
                }
              >
                <LineIcon
                  style={{
                    position: 'absolute',
                    right: 10
                  }}
                  name="close" color="#000" size={15}
                />
              </TouchableWithoutFeedback> : null
            }
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = {
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "#fff",
    paddingHorizontal: 5,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ebebeb',
    position: 'relative',
  },
  imageStyles: {
    width: 30,
    height: 30,
  },
  nameConatiner: {
    flexDirection: 'column',
    paddingHorizontal: 5,
  },
  nameStyles: {
    fontSize: 13,
    fontWeight: "500",
  },
  teamStyles: {
    fontSize: 11,
    color: '#969696',
  },
  headingContainer: {
    backgroundColor: '#EBEBEB',
    flex: 1,
  },
  headingTextStyles: {
    fontSize: 14,
    paddingVertical: 5,
    paddingHorizontal: 5,
    fontWeight: "600",
    width: 150,
    backgroundColor: '#04F0FE',
    color: '#000'
  },
}

const mapStateToProps = (state, ownProps) => {
  const { playersId } = state.userTeam;
  // console.log("ALL PLAYERS PROPS:--", selectedPlayerId.indexOf(ownProps.playerId) < 0 ? false : true);
  return {
    // isSelected: selectedPlayerId === ownProps.playerId,
    // isSelected: checkEquality(selectedPlayerId === ownProps.playerId),
    isSelected: (playersId.indexOf(ownProps.playerId) < 0 ? false : true),
  }
}

export default connect(mapStateToProps, {
  addUserPlayer,
  storeSelectedPlayerId,
  removePlayer,
  resetNewPlayersAdded,
})(PlayerListItem);