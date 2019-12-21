import React from 'react';
import { Text, View, Modal, Image, TouchableWithoutFeedback, ScrollView, } from 'react-native';
import { CardSection, Button } from "./common";
import LineIcon from 'react-native-vector-icons/SimpleLineIcons';
import { connect } from "react-redux";

class PlayerOptions extends React.Component {

  onDeclineModel() {
    console.log("DECLINE MIDEL");
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
        visible={this.props.showModal}
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
              // source={{ uri: this.props.player && this.props.player.avatar_path }} />
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
            {this.props.replacePress ? <Button background="#37003C"
              text="Replace Player"
              textColor="#fff"
            /> : null}
            <Button background="#ebebeb"
              text="Full Profile" textColor="#000"
              onPress={this.props.onAccept}
            />
          </View>
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
  const {
    showModal,
    selectedPlayer,
    replacePress,
    subSelected,
    playingSelected,
  } = state.playerOptions;
  const player = selectedPlayer;
  const { playersData } = state.userTeam;

  var playing = [];
  var subs = [];
  playersData.map((player, i) => {
    if (player.is_playing)
      playing.push(player);
    else
      subs.push(player);
  });

  return {
    showModal, player,
    replacePress,
    playing, subs,
    subSelected,
    playingSelected,
  };
};

export default connect(mapStateToProps, {})(PlayerOptions);