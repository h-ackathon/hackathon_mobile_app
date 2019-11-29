import React from 'react';
import {Text, View} from 'react-native';


const styles = {
	viewStyle: {
		backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 25
	},
	textStyle: {
		fontSize: 20
	}
};

const Header = (props) => {

	const {viewStyle, textStyle} = styles

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};


export { Header };