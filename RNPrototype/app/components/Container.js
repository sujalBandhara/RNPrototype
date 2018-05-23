'use strict'
import PropTypes from 'prop-types';
import React, { Component } from 'react'
import {
    StatusBar, StyleSheet, View, Platform
} from 'react-native'

import Icon                     from 'react-native-vector-icons/FontAwesome';
import colors                   from './../resources/styles/colors';
import DeviceInfo               from 'react-native-device-info';

const iPhone_X = DeviceInfo.getModel() === 'iPhone X';

class Container extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={[styles.container, this.props.style || {}]}>
                {/* Replace status on iOS */}
                {(Platform.OS == 'ios' && this.props.showStatusBar)?<View style={[this.props.statusBarStyle || {}, { height: 20,backgroundColor:colors.navBar }]}></View>:<View/>}
                {this.props.children}
            </View>
        )
    }
}

Container.defaultProps = {
  showStatusBar:true
};

Container.propTypes = {
  showStatusBar: PropTypes.bool,
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bgWhite,
        // alignItems: 'stretch',
        flex: 10
    },
    shoppingCart: {
        position: 'absolute',
        top: 13,
        right: 15,
        color: colors.txtDescription,
        zIndex: 1,
        backgroundColor: 'transparent'
    }
})

module.exports = Container
