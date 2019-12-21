import React from 'react';
import { Text, View, Modal, Image, TouchableHighlight, TouchableWithoutFeedback, ScrollView, } from 'react-native';
import { CardSection, Button, DisableButton } from "./common";
import LineIcon from 'react-native-vector-icons/SimpleLineIcons';
import { connect } from "react-redux";
import { swapPlayers, setListToDefaul, renderShuffleTeam } from "../actions";

class TeamListOptions extends React.Component {

  onDeclineModel() {
    console.log("DECLINE MIDEL");
  }


  renderPlayerType = (player) => {
    return (player.is_batsman ?
      <Text style={{
        color: '#000',
        backgroundColor: '#06FA88',
        alignSelf: 'center',
        fontSize: 10,
        paddingHorizontal: 5,
        paddingVertical: 3,
      }}>Batsman</Text>
      :
      player.is_bowler ?
        <Text style={{
          color: '#000',
          backgroundColor: '#FF2883',
          alignSelf: 'center',
          fontSize: 10,
          paddingHorizontal: 5,
          paddingVertical: 3,
        }}>Bowler</Text>
        :
        player.is_wicket_keeper ?
          <Text style={{
            color: '#000',
            backgroundColor: '#EBFC02',
            alignSelf: 'center',
            fontSize: 10,
            paddingHorizontal: 5,
            paddingVertical: 3,
          }}>Wicket Keeper</Text>
          :
          player.is_all_rounder ?
            <Text style={{
              color: '#000',
              backgroundColor: '#04F0FE',
              alignSelf: 'center',
              fontSize: 10,
              paddingHorizontal: 5,
              paddingVertical: 3,
            }}>All Rounder</Text>
            :
            <Text>&nbsp;</Text>
    );
  }

  swapPlayer = (player) => {
    if (this.props.subSelected) {
      this.props.swapPlayers(player, this.props.selectedSub);
      this.props.renderShuffleTeam();
      this.props.setListToDefaul();
    } else {
      this.props.swapPlayers(player, this.props.selectedPlaying);
      this.props.renderShuffleTeam();
      this.props.setListToDefaul();
    }
  }

  render() {
    const {
      cardSectionStyle,
      textStyle,
      teamStyle,
      textContainer,
      containerStyle,
      btnContainer,
      closeBtnContainer,
      playerTypeStyles,
      imageStyles
    } = styles;


    return (
      <Modal
        visible={this.props.showListModel}
        animationType="slide"
        transparent
        onRequestClose={() => this.onDeclineModel()}
      >
        <View style={[containerStyle, {
          borderColor: this.props.replacePress ? 'red' : null,
          borderBottomLeftRadius: this.props.replacePress ? 0 : null,
        }]}>
          <View style={closeBtnContainer}>
            <TouchableWithoutFeedback onPress={this.props.onDecline}>
              <LineIcon name="close" size={20} color="#fff" />
            </TouchableWithoutFeedback>
          </View>
          <CardSection style={[cardSectionStyle, { backgroundColor: '#ebebeb', }]}>
            <Image style={imageStyles}
              source={{ uri: 'https://onlinecricketleague.weebly.com/uploads/2/5/3/6/25366171/5592139.png' }} />
            <View style={textContainer}>
              {
                this.props.player && this.props.player.is_batsman ?
                  <Text style={[playerTypeStyles, { backgroundColor: '#06FA88' }]}>Batsman</Text> :
                  this.props.player && this.props.player.is_bowler ?
                    <Text style={[playerTypeStyles, { backgroundColor: '#FF2883' }]}>Bowler</Text> :
                    this.props.player && this.props.player.is_all_rounder ?
                      <Text style={playerTypeStyles}>All Rounder</Text> :
                      this.props.player && this.props.player.is_wicket_keeper ?
                        <Text style={[playerTypeStyles, { backgroundColor: '#EBFC02' }]}>Wicket Keeper</Text> :
                        null
              }
              <Text style={textStyle}>{this.props.player && this.props.player.name}</Text>
              <Text style={teamStyle}>{this.props.player && this.props.player.team}</Text>
            </View>
          </CardSection>
          <View style={btnContainer}>
            {!this.props.replacePress ? <Button background="#37003C"
              text="Replace Player"
              textColor="#fff"
              onPress={this.props.onReplacePress}
            /> : null}
            {this.props.replacePress ? <DisableButton background="rgba(55,0,60,0.5)"
              text="Replace Player"
              textColor="#fff"
            /> : null}
            <Button background="#ebebeb"
              text="Full Profile" textColor="#000"
              onPress={this.props.onAccept}
            />
          </View>
          {this.props.replacePress && !this.props.player.is_playing ?
            <View style={{
              height: 200,
            }}>
              <ScrollView>
                {this.props.playing.map((player, i) => {
                  return (
                    <TouchableHighlight onPress={() => this.swapPlayer(player)} key={player._id}>
                      <View
                        style={{
                          backgroundColor: '#ebebeb',
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                          padding: 10,
                        }}
                      >
                        <View
                          style={{
                            backgroundColor: '#ebebeb',
                            flexDirection: 'column',
                            justifyContent: 'center',
                          }}
                        >
                          <Text style={{
                            color: '#000',
                            fontWeight: "600",
                          }}>{player.name}</Text>
                          <Text style={{
                            color: '#000',
                            fontSize: 10,
                          }}>{player.team}</Text>
                        </View>
                        {this.renderPlayerType(player)}
                      </View>
                    </TouchableHighlight>
                  );
                })}
              </ScrollView>
            </View>
            :
            this.props.replacePress && this.props.player.is_playing ?
              <View style={{
                height: 200,
              }}>
                <ScrollView>
                  {this.props.subs.map((player, i) => {
                    return (
                      <TouchableHighlight onPress={() => this.swapPlayer(player)} key={player._id}>
                        <View
                          style={{
                            backgroundColor: '#ebebeb',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            padding: 10,
                          }}
                        >
                          <View
                            style={{
                              backgroundColor: '#ebebeb',
                              flexDirection: 'column',
                              justifyContent: 'center',
                            }}
                          >
                            <Text style={{
                              color: '#000',
                              fontWeight: "600",
                            }}>{player.name}</Text>
                            <Text style={{
                              color: '#000',
                              fontSize: 10,
                            }}>{player.team}</Text>
                          </View>
                          {this.renderPlayerType(player)}
                        </View>
                      </TouchableHighlight>
                    );
                  })}
                </ScrollView>
              </View>
              :
              null
          }
        </View>
      </Modal>
    );
  }
}

const styles = {
  cardSectionStyle: {
    justifyContent: 'center',
    overflow: 'hidden',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "500",
    color: '#0D0D0D',
    fontFamily: 'Helvetica',
  },
  teamStyle: {
    fontSize: 14,
    color: '#6F6F6F',
    fontWeight: "400",
    fontFamily: 'Helvetica',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingHorizontal: 15,
    paddingTop: 12,
  },
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0.65)',
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 20,
    zIndex: 99,
  },
  imageStyles: {
    width: 110,
    height: 110,
    resizeMode: 'contain'
  },
  playerTypeStyles: {
    color: '#0D0D0D',
    fontWeight: "400",
    fontFamily: 'Helvetica',
    backgroundColor: '#04F0FE', padding: 5, width: 120,
    marginBottom: 10,
  },
  closeBtnContainer: {
    backgroundColor: '#37003C', padding: 5,
    alignItems: 'flex-start',
    borderRadius: 5,
  },
  btnContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 10,
    // borderBottomLeftRadius: 5,
    // borderBottomRightRadius: 5,
  },
}

const mapStateToProps = state => {

  // console.log(state);
  const {
    showListModel,
    selectedPlayer,
    replacePress,
    subSelected,
    selectedSub,
    playingSelected,
    selectedPlaying,
  } = state.playerListOptions;

  const { playersData, restoreData } = state.userTeam;
  const { renderPlayingTeam } = state.common;
  const player = selectedPlayer;

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
    player,
    playing,
    subs,

    restoreData,
    renderPlayingTeam,

    selectedPlayer,
    showListModel,
    replacePress,
    subSelected,
    selectedSub,
    playingSelected,
    selectedPlaying,

  };
};

export default connect(mapStateToProps, { swapPlayers, setListToDefaul, renderShuffleTeam, })(TeamListOptions);