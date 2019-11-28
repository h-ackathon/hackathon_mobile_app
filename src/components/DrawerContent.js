import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './DrawerContentListItem';

const DATA = [
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
];

class DrawerContent extends React.Component {

  render() {
    return (
      <View style={ styles.container }>
      <View style={styles.topDrawer}>
        <Text style={styles.drawerText}>Hello World</Text>
      </View>
      <View style={styles.bottomDrawer}>
          <FlatList
					  data={DATA}
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
		color: '#80BFFF'
	},
	topDrawer: {
		flex: 1,
		// backgroundColor: '#001F3F',
		backgroundColor: '#000',
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

export default connect(null, {})(DrawerContent);

