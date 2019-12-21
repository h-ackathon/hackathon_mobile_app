import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
	return (
		<View style={styles.containerStyle}>
			{label ? <Text style={styles.labelStyle}>{label}</Text> : null}
			<TextInput
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				style={{height: Platform.OS == 'android' ? 40 : 20, width: 200}}
				value={value}
				onChangeText={onChangeText}
				autoCorrect={false}
			/>
		</View>
	);
}

const styles = {
	labelStyle: {
		fontSize: 16,
		paddingLeft: 20,
		flex: 1
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		// fontSize: 18,
		// lineHeight: 23,
		flex: 2
	}
}

export { Input };