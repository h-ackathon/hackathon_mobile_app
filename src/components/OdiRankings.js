import React from 'react';
import { Text, Image, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { setHeaderTitle, odiTeamsRanking } from "../actions";
import { Card, CardSection } from './common';

class OdiRankings extends React.Component {

  componentDidMount() {
    this.props.setHeaderTitle('ODI');
    this.props.odiTeamsRanking();
  }
  componentWillUnmount() {
    this.props.setHeaderTitle('News');
    // this.props.odiTeamsRanking();
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

        <Card>
          {/* <CardSection
          style={{
            padding: 10
          }}
          >
          <Text>Odi Rankings</Text>
        </CardSection> */}
          {/* <CardSection
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: 15
          }}
          >
          <Text style={[styles.tableHeader, { flex: 1, }]}>#</Text>
          <Text style={[styles.tableHeader, { flex: 5, }]}>Name</Text>
          <Text style={[styles.tableHeader, { flex: 3, alignSelf: 'center' }]}>Logo</Text>
          <Text style={[styles.tableHeader, { flex: 2, }]}>Points</Text>
        </CardSection> */}
          {this.props.odiTeams && this.props.odiTeams.map((team, i) => {
            return (
              <CardSection
                key={i}
                style={[mainContainer, this.setBackgourndStyles(i)]}
              >
                <Text style={[rankStyles, this.setTextStyles(i)]}>{i + 1}</Text>
                <Image source={{ uri: team.imageUrl }} style={[imageStyles, this.setImageStyles(i)]} />
                <Text style={[titleStyles, this.setTextStyles(i)]}>{team.title}</Text>
                <Text style={[pointsStyles, this.setTextStyles(i)]}>{team.points}</Text>
              </CardSection>
            );
          })}
        </Card>
      </ScrollView>
    );
  }
}


const styles = {
  tableHeader: {
    fontWeight: "500",
    fontSize: 15,
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
  },
  imageStyles: {
    resizeMode: 'contain', flex: 2,
    borderRadius: 30, width: 30,
    height: 30,
  },
  rankStyles: {
    flex: 1,
    fontSize: 15,
    fontWeight: "200",
  },
  titleStyles: {
    flex: 5,
  },
  pointsStyles: {
    flex: 2,
  }
}

const mapStateToProps = state => {
  const { odiTeams } = state.teams;
  return {
    odiTeams,
  };
};

export default connect(mapStateToProps, { setHeaderTitle, odiTeamsRanking })(OdiRankings);