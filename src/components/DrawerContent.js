import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './DrawerContentListItem';

const DATA_LOGIN = [
  {
    id: '1',
		name: 'Home',
		icon: 'home',
  },
  {
    id: '2',
		name: 'Dashboard',
		icon: 'drawer',
  },
  {
    id: '3',
		name: 'Login',
		icon: 'login',
  },
];
const DATA_LOGOUT = [
  {
    id: '1',
		name: 'Home',
		icon: 'home',
  },
  {
    id: '2',
		name: 'Dashboard',
		icon: 'drawer',
  },
  {
    id: '3',
		name: 'Logout',
		icon: 'logout',
  },
];

class DrawerContent extends React.Component {

  render() {
    return (
      <View style={ styles.container }>
      <View style={styles.topDrawer}>
        <Text style={styles.drawerText}>{this.props.user && this.props.user.user.email}</Text>
      </View>
      <View style={styles.bottomDrawer}>
          <FlatList
					  data={this.props.user ? DATA_LOGOUT : DATA_LOGIN}
					  renderItem={({item}) => <ListItem item={item}></ListItem>}
					  keyExtractor={item => item.id}
					/>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333'
		// backgroundColor: '#001F3F',
	},
	drawerText: {
		// color: 'gray'
		color: '#EA247B'
		// color: '#80BFFF'
	},
	topDrawer: {
		flex: 1,
		// backgroundColor: '#001F3F',
		backgroundColor: '#37003C',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center'
	},
	bottomDrawer: {
		flex: 2,
		backgroundColor: '#fff',
		// backgroundColor: '#001F3F',
		paddingHorizontal: 15,
		paddingVertical: 15
	}
});

const mapStateToProps = state => {
	const { user } = state.auth;
	return {
		user,
	}
}

export default connect(mapStateToProps, {})(DrawerContent);

