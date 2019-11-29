import React from 'react';
import { View, Text, } from 'react-native';

const ListItem = ({ label, value, }) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{label}</Text>
      <Text style={styles.textStyle}>{value}</Text>
    </View>
  );
}

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'flex-start',
  },
  labelStyle: {
    fontSize: 16,
    flex: 1
  },
  textStyle: {
    color: '#000',
    flex: 2
  }
}

export { ListItem };