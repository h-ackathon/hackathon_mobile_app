import React from 'react';
import { Text, View, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  swapPlayers,
  getPlayingFromSub,
  getSubFromPlaying,
  setSquadToDefault,
  setSelectedPlayers,
  replaceButtonPress,
  closeButtonPress,
  showReplaceModal,
  renderShuffleTeam,
  resetShuffleTeam,
  restoreOldData,
  restoreChanges,
  resetRenderShuffleTeam,
  backFromAllPlayers,
  getUserTeam,
  clearAllData,
  updateUserTeam,
} from "../actions";
import PlayerOptions from './PlayerOptions';
import ListItem from './UserPlayingTeamList';
import * as _ from "lodash";
import { Button, CardSection, IconButton, LoadingScreen } from './common';

class UserPlayingTeam extends React.Component {

  componentWillMount() {
    this.props.getUserTeam(this.props.league.key, this.props.user._id);
    // this.props.restoreOldData(this.props.playersData);
  }

  componentWillUnmount() {
    this.props.clearAllData();
  }

  onDecline = () => {
    this.props.setSquadToDefault();
  }

  onSubsPress = player => {
    if (this.props.selectedPlayer) {
      if (this.props.selectedPlayer._id === player._id) {
        this.props.setSquadToDefault();
      } else {
        if (player.is_playing && this.props.subSelected) {
          this.props.swapPlayers(player, this.props.selectedSub);
          this.props.setSquadToDefault();
          this.props.renderShuffleTeam();
        }
        if (!player.is_playing && this.props.playingSelected) {
          this.props.swapPlayers(player, this.props.selectedPlaying);
          this.props.setSquadToDefault();
          this.props.renderShuffleTeam();
        }
      }
    } else {
      this.props.setSelectedPlayers(player);
      this.props.showReplaceModal();
    }
  }

  onReplacePress = () => {
    this.props.replaceButtonPress();
    if (this.props.selectedPlayer.is_playing) {
      this.props.getSubFromPlaying(this.props.selectedPlayer);
    } else {
      this.props.getPlayingFromSub(this.props.selectedPlayer);
    }
  }


  restoreChanges = () => {
    // this.props.restoreChanges(this.props.restoreData);
    this.props.restoreChanges();
    this.props.resetRenderShuffleTeam();
  }

  confirmChanges = () => {
    // this.props.restoreChanges(this.props.restoreData);
    // this.props.restoreChanges();
    // this.props.backFromAllPlayers();
    this.props.updateUserTeam(this.props.userTeamId, this.props.teamName, this.props.playersData);
    this.props.resetRenderShuffleTeam();
  }

  render() {
    // console.log("SELCTED LEAGUE:--", this.props.league)
    return (
      <ImageBackground
        style={styles.backgroundImageStyles}
        source={require('../../assets/images/pitch3.png')}
      >
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
        <View style={styles.mainContainer}>
          <ScrollView>
            <View style={styles.playingContainer}>
              {this.props.playing && this.props.playing.map((player, i) => {
                return (
                  <ListItem
                    player={player}
                    onSubsPress={() => this.onSubsPress(player)}
                    key={i}
                    playing
                  />
                );
              })}
            </View>
            <View style={styles.subsContainer}>
              {this.props.subs && this.props.subs.map((player, i) => {
                return (
                  <ListItem
                    player={player}
                    onSubsPress={() => this.onSubsPress(player)}
                    key={i}
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>

        <View style={{
          flexDirection: 'row',
          position: 'absolute', top: 8,
          right: 0,
          // backgroundColor: '#fff',
          justifyContent: 'flex-end',
        }}>
          <IconButton
            text={this.props.playersData.length < 15 ? this.props.teamName + " Players" : "Shuffle " + this.props.teamName}
            textColor='#fff'
            background='#37003C'
            showText
            iconName={this.props.playersData.length < 15 ? "user-follow" : "refresh"}
            onPress={() => Actions.playersList({ leagueId: this.props.league.key })}
          />
          {/* <Button text={"Next"} textColor='#000' background='#ebebeb' /> */}
        </View>
        <PlayerOptions
          onReplacePress={this.onReplacePress}
          onDecline={this.onDecline}
        >
        </PlayerOptions>
        <LoadingScreen 
          visible={this.props.loading}
        />
      </ImageBackground>
    )
  }
}

const styles = {
  backgroundImageStyles: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 70,
  },
  playingContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  subsContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#02522D',
    justifyContent: 'space-evenly',
    padding: 10,
    marginTop: 40,
  },
  actionBtnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#37003C',
    alignItems: 'center',
    paddingVertical: 10,
    zIndex: 999,
  },
}

const mapStateToProps = state => {

  const {
    user,
  } = state.auth.user;
  const {
    playersData,
    restoreData,
    name,
    userTeamId,
    loading,
  } = state.userTeam;

  const {
    selectedPlayer,
    selectedSub,
    subSelected,
    selectedPlaying,
    playingSelected,
    replacePress,
  } = state.playerOptions;

  const {
    renderPlayingTeam,
    selectedLeague,
  } = state.common;
  const league = selectedLeague;

  var playing = [];
  var subs = [];
  playersData.map((player, i) => {
    if (player.is_playing)
      playing.push(player);
    else
      subs.push(player);
  });

  return {
    playersData,
    playing,
    subs,
    selectedPlayer,
    selectedSub,
    subSelected,
    selectedPlaying,
    playingSelected,
    replacePress,
    renderPlayingTeam,
    restoreData,
    user,
    league,
    teamName: name,
    userTeamId,
    loading,
  };
};

export default connect(
  mapStateToProps,
  {
    swapPlayers,
    getPlayingFromSub,
    getSubFromPlaying,
    setSquadToDefault,
    setSelectedPlayers,
    replaceButtonPress,
    closeButtonPress,
    showReplaceModal,
    renderShuffleTeam,
    resetShuffleTeam,
    restoreOldData,
    resetRenderShuffleTeam,
    restoreChanges,
    backFromAllPlayers,
    getUserTeam,
    clearAllData,
    updateUserTeam,
  }
)(UserPlayingTeam);