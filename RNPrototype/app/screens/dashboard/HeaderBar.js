'use strict'
import React, { PropTypes, Component } from 'react'
import {
    View, StyleSheet, ScrollView, TouchableOpacity,Text
} from 'react-native'

import colors           from './../../resources/styles/colors'
import Icon             from 'react-native-vector-icons/FontAwesome'

class HeaderBar extends Component {

    static defaultProps = {
        description: ''
    }

    constructor(props) {
        super(props)
    }

    render() {
        let headerLeftPartStyle = (this.props.description) ? { justifyContent: 'center' } : { flexDirection: 'row', alignItems: 'center' }
        return (
            <View>
                <View style={styles.holder}>
                    <View style={styles.header}>
                        <View style={headerLeftPartStyle}>
                            <Text style={styles.title}>{this.props.title}</Text>
                            <Text>{this.props.description}</Text>
                        </View>
                        {
                            !this.props.hideSeeAll &&
                            <TouchableOpacity onPress={this.props.onPressSeeAll} style={styles.headerRightPart}>
                                <Text style={{ marginRight: 10 }}>See All</Text>
                                <Icon style={styles.icon} name='angle-right' size={23} />
                            </TouchableOpacity>
                        }
                    </View>
                       {this.props.children}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    holder: {
        flexDirection: 'column',
        paddingBottom: 0,
        borderBottomWidth: 1,
        borderColor: colors.bdLine
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 20
    },
    headerRightPart:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon:{
        color: colors.txtDark
    },
    title:{
        fontSize: 16,
        fontWeight: '700'
    }
})

module.exports = HeaderBar
