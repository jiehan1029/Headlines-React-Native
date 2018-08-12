import React, {Component} from 'react';
import {Text, View, Dimensions} from 'react-native';
import {DrawerNavigator} from 'react-navigation';

import MenuList from './components/menuList';
import TopicRoutes from './components/topicRoutes';


const TopicList=['home','business','entertainment','general',
'health','science','sports','technology'];

const App = DrawerNavigator({
  Item1:{
    screen:TopicRoutes,
    }
  },{
    contentComponent:MenuList,
    drawerWidth: Dimensions.get('window').width-120
  }
);

export default App;