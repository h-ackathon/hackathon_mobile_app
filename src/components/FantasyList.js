import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { fantasyList, getPlayersByFantasy, setSelectedLeague } from "../actions";
import { connect } from 'react-redux';
import { Spinner, CardSection } from './common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';

class FantasyList extends React.Component {

  componentDidMount() {
    this.props.fantasyList();
    // this.props.getPlayersByFantasy(this.props.allFantasy[0].key || null);
    // this.props.navigation.setParams({ title: "Fantasy" })
    
  }

  fantasyDetails = (league) => {
    this.props.setSelectedLeague(league);
    Actions.fantasyDetails();
  }

  renderContent = () => {
    if (this.props.loading) {
      return (
        <CardSection>
          <Spinner />
        </CardSection>
      )
    }
    return (
      this.props.allFantasy && this.props.allFantasy.map((item, i) => {
        return (
          <CardSection style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 8, margin: 8,
          }} key={i}>
            <TouchableWithoutFeedback onPress={() => this.fantasyDetails(item)}>
              <Text style={{ flex: 1 }}>{item.name}</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this.fantasyDetails(item)}>
              <MaterialCommunityIcons name="arrow-right" size={20} />
            </TouchableWithoutFeedback>
          </CardSection>
        );
      })
    )
  }

  render() {
    // console.log(this.props);
    return (
      this.renderContent()
    );
  }
}

const mapStateToProps = state => {
  const { allFantasy, loading } = state.fantasyList;
  return {
    allFantasy, loading,
  }
}

export default connect(mapStateToProps, { fantasyList, getPlayersByFantasy, setSelectedLeague })(FantasyList);