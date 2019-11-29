import React from 'react';
import { Text, View, Modal } from 'react-native';
import { Button } from './Button';
import { CardSection } from './CardSection';

const Confirm = ({ children, visible, onAccept, onDecline }) => {

	const {
		cardSectionStyle,
		textStyle,
		containerStyle
	} = styles;

	return (
		<Modal
			visible={visible}
			animationType="slide"
			transparent
			onRequestClose={() => { }}
		>
			<View style={containerStyle}>
				<CardSection style={cardSectionStyle}>
					<Text style={textStyle}>{children}</Text>
				</CardSection>

				<CardSection>
					<Button onPress={onAccept}>OK</Button>
				</CardSection>
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
		backgroundColor: 'rgba(0,0,0,0.65)',
		flex: 1,
		position: 'relative',
		justifyContent: 'center'
	}
}

export { Confirm };