import React, { Component } from 'react';
import { View, Text } from 'react-native';

import MenuList from './menuList'
import MenuOverlay from './menuOverlay'

import styles from '../styles/menuStyle'

export default class Menu extends Component {
    render() {        
        let { navigation,onToggleMenu } = this.props

        return (
            <View style={styles.container}>
                <MenuOverlay 
                    onToggleMenu={onToggleMenu}
                    navigation={navigation}
                />
                <View style={styles.menu}>
                    <MenuList 
                        onToggleMenu={onToggleMenu}
                        navigation={navigation} 
                    />
                </View>
            </View>
        );
    }
}