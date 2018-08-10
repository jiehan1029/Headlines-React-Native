import React, { Component } from 'react';
import { TouchableHighlight, Text } from 'react-native';

import styles from '../styles/menuOverlayStyle'

export default class MenuOverlay extends Component {

    render() {

        return (
            <TouchableHighlight 
                onPress={() => {
                    this.props.onToggleMenu()
                }}
                style={styles.overlay}>
                <Text>This is a menu overlay component</Text>
            </TouchableHighlight>
        );
    }
}