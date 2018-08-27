import React, {Component} from 'react';
import PropTypes from 'prop-types'; 
import {NavigationActions, DrawerActions} from 'react-navigation';
import {ScrollView, Text, View, Alert} from 'react-native';

import styles from '../styles/menuList.style';

const TopicList=['home','business','entertainment','health','science','sports','technology'];

class MenuList extends Component {
  // create a method that would pass different props (topic) to
  // the TopicRoutes component, which will display that topic only (by
  // search via API). 
  constructor(props){
    super(props);
  }

  navigateToShow = (topic)  => () => {
    // see react navigation API ref for NavigationActions
    let route="";
    if(topic.topic==="home"){route="Home"}else{route="Topic"}
    const navigateAction = NavigationActions.navigate({
      routeName:route,
      params:{field:topic.topic}
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  }

  componentWillMount(){
    navItems=TopicList.map((topic,index)=>(
      <View key={index} style={styles.navItemStyle}>
        <Text onPress={this.navigateToShow({topic})}>{topic}</Text>
      </View>
    ));    
    this.setState({
      navItems
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.sectionHeadingStyle}>
            <Text>This is a header</Text>
          </View>
          {this.state.navItems}
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>This is a fixed footer</Text>
        </View>
      </View>
    );
  }
}

MenuList.propTypes={navigation:PropTypes.object};

export default MenuList;

