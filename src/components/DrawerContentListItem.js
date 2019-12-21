import React, { Component } from 'react';
import {
	Text,
	TouchableWithoutFeedback,
	View
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import LineIcon from 'react-native-vector-icons/SimpleLineIcons';

class ListItem extends Component {

	onPress() {
		if (this.props.item.name === "Dashboard")
			Actions.tabBar();
		if (this.props.item.name === "Home")
			Actions.home();
		if (this.props.item.name === "Login")
			Actions.login();
		// if (this.props.item.name === "Logout") 
			// Actions.login();
	}

	logOut = () => {
	}

	render() {
		const { textStyle, textStyleActive, iconActive, iconStyle } = styles;
		return (
			<TouchableWithoutFeedback onPress={this.onPress.bind(this)}>
				<View style={styles.container}>
					<View style={styles.innerContainer}>
						<LineIcon
							style={
								this.props.activeRoute === this.props.item.name ? iconActive : iconStyle
							}
							name={this.props.item.icon}
							size={16} />
					</View>
					<View style={styles.innerContainer}>
						<Text
							style={this.props.activeRoute === this.props.item.name ? textStyleActive : textStyle}
						>
							{this.props.item.name}
						</Text>
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		flexDirection: 'row'
	},
	innerContainer: {
		justifyContent: 'center',
		padding: 5
	},
	textStyle: {
		fontSize: 15,
		padding: 10,
		color: 'gray'
	},
	iconActive: {
		color: "#EA247B",
		// color: "#FFF",
	},
	iconStyle: {
		// color: "#80BFFF",
		color: "gray",
	},
	textStyleActive: {
		fontSize: 15,
		padding: 10,
		fontWeight: "600",
		color: '#46044D',
		// color: '#FFF',
	}

};

const mapStateToProps = (state) => {
	return {
		activeRoute: state.router.activeRoute,
	};
}

export default connect(mapStateToProps, {})(ListItem);

// export { DrawerListItem };