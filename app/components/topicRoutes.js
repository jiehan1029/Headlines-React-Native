import React, {Component} from 'react';
import {Platform, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import TopicScreen from './topicScreen';
import HomeScreen from './homeScreen';
import SearchScreen from './searchScreen';

const TopicRoutes=StackNavigator({
	Home:{
		screen:HomeScreen,
		navigationOptions:({navigation})=>({
			title:"Home",
			headerLeft:(
				// note that in latest react navigation, navigate("DrawerOpen") doesn't work
				<TouchableOpacity onPress={()=>navigation.openDrawer()}>
					<Text>Menu</Text>
				</TouchableOpacity>
			)
		})
	},
	Topic:{
		screen:TopicScreen,
		navigationOptions:({navigation})=>({
			title:navigation.state.params.field,
			headerLeft:(
				// note that in latest react navigation, navigate("DrawerOpen") doesn't work
				<TouchableOpacity onPress={()=>navigation.openDrawer()}>
					<Text>Menu</Text>
				</TouchableOpacity>
			)						
		})
	},
	Search:{
		screen:SearchScreen,
		navigationOptions:({navigation})=>({
			title:"Search Results",
			headerLeft:(
				<TouchableOpacity onPress={()=>navigation.openDrawer()}>
					<Text>Menu</Text>
				</TouchableOpacity>
			)
		})
	}
});

export default TopicRoutes;
