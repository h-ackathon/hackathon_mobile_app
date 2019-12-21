import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { CardSection, SectionTopBorder } from './common';
import { odiTeamsRanking } from "../actions";
import { connect } from "react-redux";

class Standings extends React.Component {

  componentDidMount() {
    this.props.odiTeamsRanking();
  }

  setBackgourndStyles(i) {
    if (i == 0) {
      return {
        backgroundColor: '#300134'
      };
    }
    return '';
  }

  setTextStyles(i) {
    if (i == 0) {
      return {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 18,
      };
    }
    return '';
  }

  setImageStyles(i) {
    if (i == 0) {
      return {
        width: 45,
        height: 45,
      };
    }
    return '';
  }

  render() {
    // console.log(this.props);
    const {
      mainContainer,
      imageStyles,
      titleStyles,
      rankStyles,
      pointsStyles,
    } = styles
    return (
      <ScrollView>
        {this.props.odiTeams && this.props.odiTeams.map((team, i) => {
          return (
            <CardSection
              key={i}
              style={[mainContainer]}
            >
              <Text style={[rankStyles]}>{i + 1}</Text>
              <Image source={{ uri: team.imageUrl }} style={[imageStyles]} />
              <Text style={[titleStyles]}>{team.title}</Text>
              <Text style={[pointsStyles]}>{team.points}</Text>
            </CardSection>
          );
        })}
      </ScrollView>
    );
  }
}


const styles = {
  tableHeader: {
    fontWeight: "500",
    fontSize: 12,
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
  },
  imageStyles: {
    resizeMode: 'contain', flex: 2,
    borderRadius: 30, width: 20,
    height: 20,
  },
  rankStyles: {
    flex: 1,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: 'AppleSDGothicNeo-Medium',
  },
  titleStyles: {
    flex: 5,
    fontSize: 12,
    fontFamily: 'AppleSDGothicNeo-Medium',
  },
  pointsStyles: {
    flex: 2,
    fontSize: 12,
    fontFamily: 'AppleSDGothicNeo-Medium',
  }
}

const mapStateToProps = state => {
  const { odiTeams } = state.teams;
  return {
    odiTeams,
  };
};

export default connect(mapStateToProps, { odiTeamsRanking })(Standings);