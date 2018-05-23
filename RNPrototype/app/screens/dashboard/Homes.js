'use strict'
import React, { Component } from 'react'
import {
    StyleSheet, View, FlatList,Text
} from 'react-native'

import Container        from './../../components/Container'
import items            from './../../data/homes'
import NavBar           from './../../components/NavBar'
import colors           from './../../resources/styles/colors'
import HomeList         from './HomeList'

class Homes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: items
        }
    }

    render() {
        return (
            <Container>
                <NavBar navigator={ this.props.navigation }/>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={ styles.holder }
                    ListHeaderComponent={() => <Text style={ styles.screenTitle }>Homes</Text>}
                    enableEmptySections={ true }
                    data={ this.state.dataSource }
                    renderItem={ this.renderRow }
                    keyExtractor={(item, index) => index.toString()}
                    removeClippedSubviews={false}
                />
            </Container>
        )
    }

    renderRow = (data) => {
        let rowData = data.item;
        return (
            <HomeList style={ styles.thumb } styleImages="single" data={rowData} />
        )
    }
}

const styles = StyleSheet.create({
    headerLeftIconStyle: {
        color: colors.txtDark
    },
    screenTitle: {
        fontSize:32,
        fontWeight: '700',
        paddingVertical: 30
    },
    holder: {
        paddingHorizontal: 25,
        flex: 1
    },
    thumb: {
        marginVertical: 20,
        marginHorizontal: 0,
    }
})

module.exports = Homes
