'use strict'
import React, { Component } from 'react'
import {
    StyleSheet, View, ScrollView, Dimensions,Text
} from 'react-native'


import Grid             from './../../components/Grid'
import items            from './../../data/places'
import colors           from './../../resources/styles/colors'
import Container        from './../../components/Container'
import NavBar           from './../../components/NavBar'
import HomeList         from './HomeList'

let {width} = Dimensions.get('window')
class Places extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let thumbWidth = (width - 60) / 2
        let itemThumbs = (
            items.map((item, idx) => {
               return <HomeList style={ styles.thumb } width={thumbWidth} key={ item.id } data={item}/>
            })
        )
        return (
            <Container>
                <NavBar navigator={ this.props.navigation }/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={ styles.screenTitle }>Places</Text>
                    <Grid>
                        { itemThumbs }
                    </Grid>
                </ScrollView>
            </Container>
        )
    }
}


const styles = StyleSheet.create({
    headerLeftIconStyle: {
        color: colors.txtDark
    },
    screenTitle: {
        fontWeight: '700',
        paddingVertical: 30,
        paddingHorizontal: 25,
        fontSize:32,
    },
    holder: {
        paddingHorizontal: 25,
        flex: 1
    },
    thumb: {
        marginBottom: 30
    }
})

module.exports = Places
