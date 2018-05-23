'use strict'
import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

import Icon             from 'react-native-vector-icons/Ionicons'
import colors           from './../resources/styles/colors'
import DeviceInfo               from 'react-native-device-info';

const iPhone_X = DeviceInfo.getModel() === 'iPhone X';

class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let txtMarginLeft = (this.props.hideBackButton) ? 0 : -18
        let btnBack = (
            <TouchableOpacity style={ styles.btnback } onPress={() => this._pressBtnBack()}>
                <Icon name='ios-arrow-round-back' style={[ styles.icon, this.props.headerLeftIconStyle || {} ]} size={40} />
            </TouchableOpacity>
        )
        return (
            <View style={[ styles.bar, this.props.style || {} ]}>
                { (!this.props.hideBackButton)?btnBack:<View style={{width:35}}/>}
                <View style={ styles.titleHolder }>
                    <Text style={[ styles.text, this.props.titleStyle || {}, { marginLeft: txtMarginLeft }]}>{ this.props.title }</Text>
                </View>
                { (this.props.headerRight)?this.props.headerRight:<View style={{width:35}}/>}
            </View>
        )
    }

    _pressBtnBack() {
        this.props.navigator.goBack();
    }
}

const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        height: (iPhone_X)?88:45,
        alignItems: 'center',
        backgroundColor:colors.navBar,
        paddingTop:(iPhone_X)?30:0
    },
    titleHolder: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: colors.txtWhite,
        fontWeight: '700',
        fontSize:(iPhone_X)?20:16
    },
    icon: {
        color: colors.txtWhite,
        backgroundColor: 'transparent'
    },
    btnback: {
        padding: 10,
        marginLeft: 10
    }
})

module.exports = NavBar
