import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const self = this;

class DisableButton extends React.Component {
	render() {
		const { buttonStyle, textStyle } = styles;
		return (
			<View
				style={[buttonStyle, {backgroundColor: this.props.background}]}
			>
				<Text style={[textStyle, {color: this.props.textColor}]}>{this.props.text}</Text>
			</View>
		);
	}
}

const styles = {
	buttonStyle: {
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		flex: 1,
		borderRadius: 5,
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

export { DisableButton };