import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
import {Card} from 'react-native-elements';

import {fetchSearch} from '../actions/fetchAPI_action';

export class SearchScreen extends Component {
	constructor(props){
		super(props);
    this.state={
      newsCategory:'search',
      newsData:[],
      searchCount:null,
      searchText:this.props.navigation.state.params.searchText
    };
	}

  componentDidMount(){
    this.props.dispatch(fetchSearch(this.state.searchText));
  }

  componentWillReceiveProps(nextProps){
    //console.log('in componentWillReceiveProps function, nextProps=',nextProps);
    //console.log('end of nextProps');
    this.setState({
      newsData:nextProps.searchData.data,
      searchCount:nextProps.searchData.count
    });
  }

  render() {
    //console.log('this render newsData=',this.state.newsData);
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
        <Text>Found {this.state.searchCount} search results</Text>
      	{NewsCards}
      </View>
    );
  }
}

const mapStateToProps = (state)=>{
    return {
        searchData: state.searchData
    };
}

export default connect(mapStateToProps)(SearchScreen);