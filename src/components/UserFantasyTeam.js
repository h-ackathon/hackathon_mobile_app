import React from 'react';
import { Text, View, TouchableHighlight, Image, TouchableOpacity, ScrollView } from 'react-native';
import {
  showReplaceModal,
  closeButtonPress,
  renderShuffleTeam,
  resetRenderShuffleTeam,
  restoreChanges,
  selectPlayer,
  showListModel,
  removeListModel,
  subFlag,
  playingFlag,
  setListToDefaul,
  updateUserTeam,
} from "../actions";
import { connect } from "react-redux";
import TeamListOptions from "./TeamListOptions";

class UserFantasyTeam extends React.Component {

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

  onPressAction = (player) => {
    this.props.showListModel();
    this.props.selectPlayer(player);
  }

  onDecline = () => {
    this.props.setListToDefaul();
  }

  onReplacePress = () => {
    if (!this.props.player.is_playing) {
      this.props.subFlag(this.props.player);
    } else {
      this.props.playingFlag(this.props.player);
    }
  }

  restoreChanges = () => {
    this.props.restoreChanges();
    this.props.resetRenderShuffleTeam();
  }

  confirmChanges = () => {
    this.props.updateUserTeam(this.props.userTeamId, this.props.name, this.props.playersData);
    this.props.resetRenderShuffleTeam();
  }

  renderContent = () => {
    return (
      <ScrollView>
        {this.props.renderPlayingTeam ?
          <View style={styles.actionBtnsContainer}>
            <TouchableOpacity onPress={() => this.confirmChanges()}>
              <Text style={{
                color: 'green',
              }}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.restoreChanges()}>
              <Text style={{
                color: '#FE1F7C',
              }}>Cancel</Text>
            </TouchableOpacity>
          </View> :
          null}
        {this.props.playing && this.props.playing.map((player, i) => {
          return (
            <TouchableHighlight
              onPress={
                () => this.onPressAction(player)
              } key={player._id}>
              <View style={styles.mainContainer}>
                {!this.props.allteam ? this.getPlayerType(player) : null}
                <View>
                  <Image style={styles.imageStyles} source={{ uri: player.avatar_path }} />
                </View>
                <View style={styles.nameConatiner}>
                  <Text style={styles.nameStyles}>{player.name}</Text>
                  <Text style={styles.teamStyles}>{player.team}</Text>
                </View>
              </View>
            </TouchableHighlight>
          );
        })}
        <View style={{
          backgroundColor: '#ebebeb',
        }}>
          <Text style={{
            color: '#fff',
            fontSize: 13,
            padding: 5,
            fontWeight: "600",
            backgroundColor: '#37003C',
            width: 100,
          }}>Bench</Text>
        </View>
        {this.props.subs && this.props.subs.map((player, i) => {
          return (
            <TouchableHighlight
              onPress={
                () => this.onPressAction(player)
              } key={player._id}>
              <View style={styles.mainContainer}>
                {!this.props.allteam ? this.getPlayerType(player) : null}
                <View>
                  <Image style={styles.imageStyles} source={{ uri: player.avatar_path }} />
                </View>
                <View style={styles.nameConatiner}>
                  <Text style={styles.nameStyles}>{player.name}</Text>
                  <Text style={styles.teamStyles}>{player.team}</Text>
                </View>
              </View>
            </TouchableHighlight>
          );
        })}
        <TeamListOptions
          onDecline={this.onDecline}
          onReplacePress={this.onReplacePress}
        />
      </ScrollView>
    )
  }

  render() {

    return (
      this.renderContent()
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
  actionBtnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#37003C',
    alignItems: 'center',
    paddingVertical: 10,
  },
}

const mapStateToProps = state => {
  const { playersData, restoreData, userTeamId, name, } = state.userTeam;
  const {
    selectedPlayer,
  } = state.playerListOptions;
  const {
    renderPlayingTeam,
  } = state.common;

  var playing = [];
  var subs = [];
  var player = selectedPlayer;
  playersData.map((player, i) => {
    if (player.is_playing)
      playing.push(player);
    else
      subs.push(player);
  });

  return {
    restoreData,
    renderPlayingTeam,
    playing,
    subs,
    player,
    selectedPlayer,
    userTeamId,
    name,
  };
};

export default connect(
  mapStateToProps,
  {
    showReplaceModal,
    closeButtonPress,
    selectPlayer,
    showListModel,
    removeListModel,
    subFlag,
    playingFlag,
    setListToDefaul,
    renderShuffleTeam,
    resetRenderShuffleTeam,
    restoreChanges,
    updateUserTeam,
  }
)(UserFantasyTeam);