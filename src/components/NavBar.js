import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Input, Card, CardSection } from './common';
import LineIcon from 'react-native-vector-icons/SimpleLineIcons';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

class NavBar extends React.Component {
  render() {
    return (
      <CardSection
        style={{
          paddingTop: 35,
          backgroundColor: '#46044D',
          alignItems: 'center',
          justifyContent: 'flex-start'
        }}
      >
        <TouchableWithoutFeedback onPress={() => Actions.drawerOpen()}>
          <LineIcon name="menu" style={{ paddingHorizontal: 5, paddingVertical: 5 }} size={25} color="#fff" />
        </TouchableWithoutFeedback>
        <Text>{this.props.headerTitle}</Text>
        {/* <Input
          label="Search"
          placeholder="Keyword..."
        /> */}
      </CardSection>
    );
  }
}

const mapStateToProps = state => {
  const { headerTitle } = state.router;
  return {
    headerTitle,
  };
};

export default connect(mapStateToProps, {})(NavBar);