import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const self = this;

class Button extends React.Component {
	render() {
		const { buttonStyle, textStyle } = styles;
		return (
			<TouchableOpacity
				style={[buttonStyle, {backgroundColor: this.props.background}]}
				onPress={this.props.onPress}
			>
				<Text style={[textStyle, {color: this.props.textColor}]}>{this.props.text}</Text>
			</TouchableOpacity>
		);
	}
}

const styles = {
	buttonStyle: {
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		flex: 1,
		borderRadius: 5,
		// borderWidth: 1,
		// borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5,
		marginVertical: 3,
	},
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 12,
		fontWeight: '600',
		paddingTop: 15,
		paddingBottom: 15,
	}
}

export { Button };