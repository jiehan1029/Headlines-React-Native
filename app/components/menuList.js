import React, { Component } from 'react';
import { TouchableHighlight, Text } from 'react-native';


export default class MenuList extends Component {

    render() {

        return (
            <TouchableHighlight 
                onPress={() => {
                    this.props.onToggleMenu()
                }}
            >
                <Text>This is a menu list component</Text>
            </TouchableHighlight>
        );
    }
}