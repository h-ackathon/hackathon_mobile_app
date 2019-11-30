import React from 'react';
import { Text, View } from 'react-native';

class SectionBreak extends React.Component{
  render(){
    return (
      <View style={{
        borderColor: '#ddd',
        borderTopWidth: 1,
        position: 'relative',
      }}>
      </View>
    );
  }
}

export { SectionBreak };