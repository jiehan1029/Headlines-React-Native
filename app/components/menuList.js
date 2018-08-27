import React, {Component} from 'react';
import PropTypes from 'prop-types'; 
import {NavigationActions, DrawerActions} from 'react-navigation';
import {ScrollView, Text, View, Alert} from 'react-native';
import {SearchBar, Button} from 'react-native-elements';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from '../styles/menuList.style';

const TopicList=['home','business','entertainment','health','science','sports','technology'];

class MenuList extends Component {
  // create a method that would pass different props (topic) to
  // the TopicRoutes component, which will display that topic only (by
  // search via API). 
  constructor(props){
    super(props);
    this.state={
      searchText:""
    };
    this.handleChangeText=this.handleChangeText.bind(this);
    this.handleSearch=this.handleSearch.bind(this);
  }

  handleChangeText=(text)=>{
    this.setState({
      searchText:text
    });
  }

  handleSearch=(e)=>{
    e.stopPropagation();
    this.props.dispatch(this.navigateToSearch(this.state.searchText));
  }

  navigateToShow=(topic)=> () => {
    // see react navigation API ref for NavigationActions
    let route="";
    if(topic.topic==="home"){
      route="Home";
    }
    else{
      route="Topic";
    }
    const navigateAction = NavigationActions.navigate({
      routeName:route,
      params:{field:topic.topic}
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  }

  navigateToSearch=(searchText)=> () => {
    const NavigationActionToSearch = NavigationActions.navigate({
      routeName:"Search",
      params:{searchText:searchText}
    }); 
    this.props.navigation.dispatch(NavigationActionToSearch);
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
            <SearchBar 
              lightTheme
              onChangeText={text=>this.handleChangeText(text)}
              onClearText={text=>this.setState({searchText:""})}
              placeholder='Type to search'
            />
            <Button 
              onPress={e=>this.handleSearch(e)}
              title='search' />
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

export default connect()(MenuList);

