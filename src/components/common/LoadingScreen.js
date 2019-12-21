import React from 'react';
import { Text, View, Modal } from 'react-native';
import { Button } from './Button';
import { CardSection } from './CardSection';
import { Spinner } from './Spinner';

const LoadingScreen = ({ children, visible, onAccept, onDecline }) => {

  const {
    cardSectionStyle,
    containerStyle
  } = styles;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
    >
      <View style={containerStyle}>
        <View style={cardSectionStyle}>
          <Spinner />
        </View>
      </View>
    </Modal>
  );
}

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    // backgroundColor: 'rgba(0,0,0,0.65)',
    backgroundColor: '#37003C',
    flex: 1,
    position: 'relative',
    justifyContent: 'center'
  }
}

export { LoadingScreen };