import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';

import {fetchCategory} from '../actions/fetchAPI_action';

export class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      newsData:[]
    };
  }

  componentDidMount(){
    console.log('componentDidMount');
    this.props.dispatch(fetchCategory('general'));
    console.log('action dispatched');
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      newsData:nextProps.categoryData.data
    });
  }

  render() {
    console.log('test console.log')
    console.log(this.state);
    return (
      <View>
      	<Text>This is a Home screen page</Text>
      </View>
    );
  }
}

const mapStateToProps = (state)=>{
    return {
        categoryData: state.categoryData
    };
}
/*
const mapDispatchToProps = {
  fetchCategory
}
*/

export default connect(mapStateToProps)(HomeScreen);