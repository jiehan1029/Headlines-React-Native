import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
import {Card} from 'react-native-elements';

import {fetchCategory} from '../actions/fetchAPI_action';

export class TopicScreen extends Component {
	constructor(props){
		super(props);
    this.state={
      newsData:[],
      newsCategory:this.props.navigation.state.params.field
    };
	}

  componentDidMount(){
    this.props.dispatch(fetchCategory(this.state.newsCategory));
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      newsData:nextProps.categoryData.data
    });
  }

  render() {
    let NewsCards=(<Text>Loading...</Text>);
    if(this.state.newsData.length!==0){
      NewsCards=this.state.newsData.map((news,key)=>{
        return (
          <Card key={key}>
            <Text>{news.title}</Text>
          </Card>
        )
      });
    }  	
    return (
      <View>
      	{NewsCards}
      </View>
    );
  }
}

const mapStateToProps = (state)=>{
    return {
        categoryData: state.categoryData
    };
}

export default connect(mapStateToProps)(TopicScreen);