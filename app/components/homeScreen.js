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
    this.props.dispatch(fetchCategory('general'));
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      newsData:nextProps.categoryData.data,
      newsCategory:nextProps.categoryData.category
    });
  }

  render() {
    //console.log('render state=',this.state.newsCategory);
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

export default connect(mapStateToProps)(HomeScreen);