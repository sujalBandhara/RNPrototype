import React,{Component} from 'react';
import { View, StyleSheet, Text, TouchableOpacity,StatusBar,ImageBackground } from 'react-native'

import Icon             from 'react-native-vector-icons/SimpleLineIcons'
import colors           from './../../resources/styles/colors'
import Container        from './../../components/Container'
import NavBar           from './../../components/NavBar'
import Input            from './../../components/form/Input'
import Button           from './../../components/form/Button'
import BlankSpace       from './../../components/BlankSpace'

class Signup extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container showStatusBar={false}>
                <ImageBackground source={{uri:'background_app'}} style={styles.app_background} resizeMode="stretch">
                  <NavBar style={styles.navbarStyle} navigator={ this.props.navigation } />
                  <View style={styles.topView}>

                  </View>

                  <View style={styles.middleView}>
                      <View style={{alignItems:'center'}}>
                        <Text style={styles.signTxt}>Sign Up</Text>
                      </View>
                      <BlankSpace spaceHeight={15}/>
                      <Input style={styles.inputStyleFirstName} placeholderText="First Name"/>
                      <Input style={styles.inputStyle} placeholderText="Last Name"/>
                      <Input style={styles.inputStyle} placeholderText="Email" keyboardType="email-address"/>
                      <Input style={styles.inputStylePasswordName} placeholderText="Password" isPasswordField={true}/>
                      <BlankSpace spaceHeight={15}/>
                      <Button style={styles.buttonSignupStyle} title="Signup"/>
                  </View>

                  <View style={styles.bottomView}>
                  </View>
                </ImageBackground>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
  navbarStyle:{
    backgroundColor:'transparent',
    borderWidth:0,
  },
  app_background:{
    height:null,
    width:null,
    flex:10
  },
  topView:{
    flex:1,
    borderWidth:0,
    justifyContent:'center',
    alignItems:'center',
  },
  middleView:{
    flex:6,
    borderWidth:0,
    justifyContent:'center'
  },
  bottomView:{
    flex:3,
    borderWidth:0
  },
  signTxt:{
    fontSize:18,
    fontWeight:'600',
    color:colors.button_Color,
    fontWeight:'900',
  },
  inputStyleFirstName:{
    backgroundColor:colors.txtWhite,
    borderWidth:1,
    borderColor:colors.grey,
    marginLeft:20,
    marginRight:20,
    color:colors.txtDark,
    paddingHorizontal:10,
    borderTopLeftRadius:7,
    borderTopRightRadius:7
  },
  inputStyle:{
    backgroundColor:colors.txtWhite,
    borderWidth:1,
    borderColor:colors.grey,
    marginLeft:20,
    marginRight:20,
    color:colors.txtDark,
    paddingHorizontal:10,
  },
  inputStylePasswordName:{
    backgroundColor:colors.txtWhite,
    borderWidth:1,
    borderColor:colors.grey,
    marginLeft:20,
    marginRight:20,
    color:colors.txtDark,
    paddingHorizontal:10,
    borderBottomLeftRadius:7,
    borderBottomRightRadius:7
  },
  inputTitle:{
    marginLeft:20,
    color:colors.txtDark
  },
  buttonSignupStyle:{
    height:40,
    borderRadius:5,
    marginLeft:20,
    marginRight:20,
    backgroundColor:colors.button_Color,
    borderWidth:0,
  },
})

module.exports = Signup
