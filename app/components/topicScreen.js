import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class TopicScreen extends Component {

  render() {

    return (
    	<View>
      <Text>This is a topic screen page to show {this.props.navigation.state.params.field}</Text>
      </View>
    );
  }
}
