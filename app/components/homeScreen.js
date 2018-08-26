import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';

export class HomeScreen extends Component {
  render() {
    return (
      <View>
      	<Text>This is a Home screen page</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
    return {
        categoryData: state.categoryData
    };
}

export default connect(mapStateToProps)(HomeScreen);