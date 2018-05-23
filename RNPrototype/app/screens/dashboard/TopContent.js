import React,{Component} from 'react';
import { View, StyleSheet, Text, TouchableOpacity,StatusBar,ScrollView,Image,ImageBackground,Dimensions } from 'react-native'

import Icon             from 'react-native-vector-icons/SimpleLineIcons'
import {NavigationActions} from 'react-navigation';
import colors           from './../../resources/styles/colors'
import Container        from './../../components/Container'
import NavBar           from './../../components/NavBar'
import Input            from './../../components/form/Input'
import Button           from './../../components/form/Button'
import BlankSpace       from './../../components/BlankSpace'

const screenSize = Dimensions.get('window');

class TopContent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.contentArea}>
                <Text style={styles.welcomeText}>{this.props.welcomeText}</Text>
                <Text style={styles.nameText}>{this.props.titleName}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  contentArea:{
    marginLeft:20,
    marginTop:30
  },
  welcomeText:{
    fontSize:25,
    color:colors.txtWhite
  },
  nameText:{
    fontSize:25,
    color:colors.txtWhite
  }
});

module.exports = TopContent
