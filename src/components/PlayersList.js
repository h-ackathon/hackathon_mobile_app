import React from 'react';
import { Text, View, Image, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import {
  getPlayersByFantasy,
  backFromAllPlayers,
  changeTeamName,
  setErrorMsg,
  clearErrorMsg,
  clearAllData,
  saveUserTeam,
  newPlayersAdded,
  resetNewPlayersAdded,
  updateUserTeam,
  restoreChanges,
} from "../actions";
import { CardSection, Input, IconButton, Confirm, LoadingScreen } from './common';
import ListItem from './PlayerListItem';
import { Actions } from 'react-native-router-flux';

class PlayersList extends React.Component {

  componentDidMount() {
    // console.log(this.props.leagueId);
    this.props.getPlayersByFantasy(this.props.leagueId);
  }

  componentWillUnmount() {
    this.props.restoreChanges();
  }

  renderBowlerContent = () => {
    return (
      this.props.bowlerArray && this.props.bowlerArray.map((player, i) => {
        return (
          <ListItem player={player.player} playerId={player.player._id} name={player.name} key={i} allteam={true} />
        );
      })
    )
  }
  renderBatsmanContent = () => {
    return (
      this.props.batsmanArray && this.props.batsmanArray.map((player, i) => {
        return (
          <ListItem key={i} player={player.player} playerId={player.player._id} name={player.name} allteam={true} />
        );
      })
    )
  }
  renderAllRounderContent = () => {
    return (
      this.props.allRounderArray && this.props.allRounderArray.map((player, i) => {
        return (
          <ListItem player={player.player} playerId={player.player._id} name={player.name} key={i} allteam={true} />
        );
      })
    )
  }
  renderWicketKeeperContent = () => {
    return (
      this.props.wicketKeeperArray && this.props.wicketKeeperArray.map((player, i) => {
        return (
          <ListItem player={player.player} playerId={player.player._id} name={player.name} key={i} allteam={true} />
        );
      })
    )
  }

  submitPress = () => {
    // console.log("UPDATE USER TAEM", this.props.restoreData);
    if (!this.props.name) {
      this.props.setErrorMsg('Pick a team name.');
      return;
    }
    if (this.props.playersData.length < 10) {
      this.props.setErrorMsg('Must select 11 players');
      return;
    }
    // console.log("UPDATE USER TAEM", this.props.restoreData);
    if (this.props.restoreData.length) {
      // this.props.newPlayersAdded();
      this.props.updateUserTeam(this.props.userTeamId, this.props.name, this.props.playersData);
    } else {
      // this.props.newPlayersAdded();
      this.props.saveUserTeam(this.props.playersData,
        this.props.name, this.props.user._id, this.props.token, this.props.selectedLeague.key);
    }
  }

  cancelPress = () => {
    // console.log("CANCEL USER TAEM", this.props.restoreData);
    this.props.resetNewPlayersAdded();
    // this.props.clearAllData();
    Actions.pop();
  }

  onAccept = () => {
    this.props.clearErrorMsg();
  }

  render() {
    // console.log(this.props);
    return (
      <View style={{
        flexDirection: 'column',
      }}>
        <View style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingHorizontal: 5,
        }}>
          <View style={{ flex: 2 }}>
            <Input
              value={this.props.name}
              onChangeText={(value) => this.props.changeTeamName({ prop: 'name', value })}
              placeholder="Enter Team Name"
              style={{ width: '100%' }} />
          </View>
          <View style={{
            flexDirection: 'row',
            flex: 1
          }}>
            <IconButton onPress={this.submitPress} iconName="check" background='green' textColor="#fff" />
            <IconButton onPress={this.cancelPress} iconName="close" background='red' textColor="#fff" />
          </View>
        </View>
        <ScrollView>
          <View style={styles.headingContainer}>
            <Text style={[styles.headingTextStyles, { backgroundColor: '#06FA88' }]}>Batsman</Text>
            {this.renderBatsmanContent()}
          </View>
          <View style={styles.headingContainer}>
            <Text style={[styles.headingTextStyles, { backgroundColor: '#FF2883' }]}>Bowler</Text>
            {this.renderBowlerContent()}
          </View>
          <View style={styles.headingContainer}>
            <Text style={styles.headingTextStyles}>All Rounder</Text>
            {this.renderAllRounderContent()}
          </View>
          <View style={styles.headingContainer}>
            <Text style={[styles.headingTextStyles, { backgroundColor: '#EBFC02' }]}>Wicket Keeper</Text>
            {this.renderWicketKeeperContent()}
          </View>
        </ScrollView>
        <Confirm
          visible={this.props.errorMsg ? true : false}
          onAccept={this.onAccept}

        >
          {this.props.errorMsg}
        </Confirm>
        <LoadingScreen
          visible={this.props.loading}
        />
      </View>
    )
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

const mapStateToProps = state => {
  const { allPlayers } = state.leaguePlayers;
  const { playersId, playersData, name, errorMsg, restoreData, userTeamId, loading } = state.userTeam;
  const { user } = state.auth.user;
  const { token } = state.auth.user;
  const { selectedLeague, newPlayersAdded } = state.common;
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
    playersId,
    playersData,
    bowlerArray,
    batsmanArray,
    allRounderArray,
    wicketKeeperArray,
    name,
    errorMsg,
    user,
    token,
    selectedLeague,
    newPlayersAdded,
    restoreData,
    userTeamId,
    loading,
  };
};

export default connect(
  mapStateToProps,
  {
    changeTeamName,
    getPlayersByFantasy,
    setErrorMsg,
    clearErrorMsg,
    clearAllData,
    saveUserTeam,
    backFromAllPlayers,
    newPlayersAdded,
    resetNewPlayersAdded,
    updateUserTeam,
    restoreChanges,
  }
)(PlayersList);