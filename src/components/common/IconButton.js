import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const self = this;

class IconButton extends React.Component {
	render() {
		const { buttonStyle, textStyle, iconStyle } = styles;
		return (
			<TouchableOpacity
				style={[buttonStyle, {backgroundColor: this.props.background}]}
				onPress={this.props.onPress}
			>
				<View style={{
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
					<SimpleLineIcons style={iconStyle} name={this.props.iconName} size={15} color={this.props.textColor} />
					{this.props.showText ? <Text style={[textStyle, {color: this.props.textColor, alignSelf: 'flex-start'}]}>{this.props.text}</Text> : null}
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = {
	buttonStyle: {
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		marginLeft: 5,
		marginRight: 5,
		marginVertical: 3,
		alignItems: 'center',
		flex: 1,
	},
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 12.5,
		fontWeight: '600',
		paddingHorizontal: 5,
		paddingVertical: 8,
	},
	iconStyle: {
		paddingHorizontal: 5,
		paddingVertical: 8,
	}
}

export { IconButton };