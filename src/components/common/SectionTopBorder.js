import React from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';

class SectionTopBorder extends React.Component {
  render() {
    return (
      // <ImageBackground
      //   source={require('../../../assets/images/yellow-green-purple.png')}
      //   style={{
      //     height: '12%',
      //     position: 'absolute',
      //     top: 0,
      //     zIndex: 999,
      //     width: '100%',
      //   }}
      // />
      <View style={{
        justifyContent:'center',
        alignItems: 'center',
      }}>

        <Image source={require('../../../assets/images/yellow-green-purple.png')}
          style={{
            height: 5,
            position: 'absolute',
            top: -5,
            zIndex: 999,
            width: '95%',
          }}
        />
      </View>
    );
  }
}

export { SectionTopBorder };