import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class Chip extends React.Component {
  render() {
    return (
      <View style={{
        display: 'flex',
        backgroundColor: '#90fcf9',
        borderRadius: 20, margin: 2,
        width: 'auto'

      }}>
        <View style={{
          justifyContent: 'space-between',
          flexDirection: 'row', alignItems: 'center',
        }}>
          <Text style={{ color: '#416B76', padding: 10 }}>{this.props.text}</Text>
          {this.props.view ?
            <TouchableWithoutFeedback onPress={this.props.onPress}>
              <FontAwesome style={{ padding: 10 }} name="times" size={20} color="#FF4136" />
            </TouchableWithoutFeedback> :
            // <TouchableWithoutFeedback onPress={this.props.onViewPress}>
            //   <FontAwesome style={{ padding: 10 }} name="map-marker" size={20} color="#FF4136" />
            // </TouchableWithoutFeedback>
            null
          }
        </View>
      </View>
    );
  }
}

export { Chip };