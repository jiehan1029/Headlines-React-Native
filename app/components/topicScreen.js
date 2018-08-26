import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';

export class TopicScreen extends Component {

  render() {
    return (
    	<View>
      <Text>This is a topic screen page to show {this.props.navigation.state.params.field}</Text>
      </View>
    );
  }
}

export default connect()(TopicScreen);