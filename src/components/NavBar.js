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
          paddingTop: 55,
          paddingBottom: 20,
          backgroundColor: '#37003C',
          alignItems: 'center',
          justifyContent: 'flex-start'
        }}
      >
        <TouchableWithoutFeedback onPress={() => Actions.pop()}>
          <LineIcon name="arrow-left"
            style={{
              paddingHorizontal: 8,
              paddingVertical: 5
            }}
            size={20} color="#fff" />
        </TouchableWithoutFeedback>
        <Text style={{fontSize: 18, fontWeight:"500", color: '#EA247B'}}>{this.props.headerTitle}</Text>
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