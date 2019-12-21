import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import * as _ from "lodash";

class UserPlayingTeamList extends React.Component {

  uppercase = (str) => {
    var array1 = str.split(' ');
    var newarray1 = [];

    for (var x = 0; x < 2; x++) {
      if (x == 0) {
        newarray1.push(array1[x].charAt(0).toUpperCase());
      } else {
        newarray1.push(array1[x].toUpperCase());
      }
    }
    return newarray1.join(' ');
  }

  getText = (text) => {
    var str = text;
    var matches = str.match(/\b(\w)/g); // ['J','S','O','N']
    var acronym = matches.join(''); // JSON
    if (str.trim().indexOf(' ') != -1) {
      return acronym;
    } else {
      return text;
    }
  }

  setPlayingStyles = (player) => {
    return (
      this.props.playingSelected ? [
        styles.textContainer,
        {
          borderColor: this.props.replacePress &&
            this.props.selectedPlaying._id ===
            player._id ? 'red' : '',
          borderWidth: this.props.replacePress &&
            this.props.selectedPlaying._id ===
            player._id ? 2 : 0,
        }
      ] : [
          styles.textContainer,
          {
            borderColor: this.props.replacePress ? 'red' : '',
            borderWidth: this.props.replacePress ? 2 : 0,
          }
        ]
    )
  }

  setPlayingBackground = (player) => {
    return (
      this.props.playingSelected ? [
        styles.teamStyles,
        {
          backgroundColor: this.props.replacePress &&
            this.props.selectedPlaying._id ===
            player._id ? 'red' : '#0A422F',
        }
      ] : [
          styles.teamStyles,
          {
            backgroundColor: this.props.replacePress ? 'red' : '#0A422F',
          }
        ]
    )
  }

  setSubStyles = (player) => {
    return (
      this.props.playingSelected ?
        [
          styles.textContainer,
          {
            borderColor: this.props.replacePress ? 'green' : '',
            borderWidth: this.props.replacePress ? 2 : 0,
          }
        ] : [
          styles.textContainer,
          {
            borderColor: this.props.selectedSub &&
              this.props.selectedSub._id ===
              player._id ? 'green' : '',
            borderWidth: this.props.selectedSub &&
              this.props.selectedSub._id ===
              player._id ? 2 : 0,
          }
        ]
    );
  }

  setSubBackground = (player) => {
    return (
      this.props.playingSelected ?
        [
          styles.subTeamStyles,
          {
            backgroundColor: this.props.replacePress ? 'green' : '#0A422F',
          }
        ] : [
          styles.subTeamStyles,
          {
            backgroundColor: this.props.selectedSub &&
              this.props.selectedSub._id ===
              player._id ? 'green' : '#0A422F',
          }
        ]
    );
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onSubsPress}>
        <View style={[
          styles.playerBoxStyles
        ]}>
          <Image style={{
            width: 30,
            height: 30
          }} source={require('../../assets/images/lqkit.png')} />
          <View style={this.props.playing ?
            this.setPlayingStyles(this.props.player) :
            this.setSubStyles(this.props.player)}
          >
            <Text style={styles.nameStyles}>{this.props.player.name}</Text>
            <Text style={this.props.playing ?
              this.setPlayingBackground(this.props.player) :
              this.setSubBackground(this.props.player)}
            >
              {this.getText(this.props.player.team.toUpperCase())}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  playerBoxStyles: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '33%',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginHorizontal: 3,
    marginVertical: 8,
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 3,
  },
  nameStyles: {
    color: '#fff',
    fontSize: 10,
    fontWeight: "600",
    paddingHorizontal: 5,
    paddingVertical: 2,
    backgroundColor: '#02522D',
    alignSelf: 'stretch',
  },
  teamStyles: {
    color: '#fff',
    fontSize: 10,
    fontWeight: "700",
    paddingHorizontal: 5,
    paddingVertical: 2,
    textAlign: 'center',
    backgroundColor: '#0A422F',
    alignSelf: 'stretch',
  },
  subTeamStyles: {
    color: '#fff',
    fontSize: 10,
    fontWeight: "700",
    paddingHorizontal: 5,
    paddingVertical: 2,
    textAlign: 'center',
    backgroundColor: '#0A422F',
    alignSelf: 'stretch',
  },
}

const mapStateToProps = state => {

  const {
    selectedSub,
    subSelected,
    selectedPlaying,
    playingSelected,
    replacePress,
  } = state.playerOptions;

  return {
    selectedSub,
    subSelected,
    selectedPlaying,
    playingSelected,
    replacePress,
  };
};

export default connect(
  mapStateToProps,
  {

  }
)(UserPlayingTeamList);