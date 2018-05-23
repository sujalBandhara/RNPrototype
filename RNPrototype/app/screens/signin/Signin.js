import React,{Component} from 'react';
import { View, StyleSheet, Text, TouchableOpacity,StatusBar,ScrollView,Image,ImageBackground,Dimensions,Alert } from 'react-native'

import Icon                   from 'react-native-vector-icons/SimpleLineIcons'
import { NavigationActions }  from 'react-navigation';
import colors                 from './../../resources/styles/colors'
import Container              from './../../components/Container'
import NavBar                 from './../../components/NavBar'
import Input                  from './../../components/form/Input'
import Button                 from './../../components/form/Button'
import BlankSpace             from './../../components/BlankSpace'
import { loginAPI }           from './../../redux/reducers/reducer';
import { connect }            from 'react-redux';
import store                  from './../../redux/store/configureStore'

const screenSize = Dimensions.get('window');

class Signin extends Component {

    constructor(props) {
        super(props);
        this.state={
          email:'ankita@bypt.in',
          password:'111111',
          appLoginResponse: [],
          isLoginClicked:false
        }
        store.subscribe(() => {
          console.log("Data is update in store:",store.getState().loginResponse);
            this.setState({
              appLoginResponse: store.getState().loginResponse
            });
        });
    }


    // shouldUpdateComponent(){
    //
    // }
    // componentWillUpdate(){
    //
    // }

    render() {
        return (
            <Container showStatusBar={false}>
                <ImageBackground source={{uri:'background_app'}} style={styles.app_background} resizeMode="stretch">
                    <View style={styles.topView}>
                        <Text style={styles.signTxt}>Sign in</Text>
                    </View>
                    <View style={styles.middleView}>
                      <Input style={styles.inputStyleLogin} placeholderText="Email" keyboardType="email-address" onChangeText={(text)=>this.setState({email:text}) } value={this.state.email}/>
                      <Input style={styles.inputStylePassword} placeholderText="Password" isPasswordField={true} onChangeText={(text)=>this.setState({password:text}) } value={this.state.password}/>
                      <BlankSpace spaceHeight={20}/>
                      <Button onPress={()=>this._onClickButtonLogin()} style={styles.buttonLoginStyle} title="Login"/>
                      <BlankSpace spaceHeight={15}/>
                      <Button onPress={()=>this._onClickButtonSignup()} style={styles.buttonSignup} titleStyle={styles.buttonSignupTitle} title="No account? Create from here"/>
                      {this.props.children}
                    </View>

                    <View style={styles.bottomView}>
                    </View>
                </ImageBackground>
            </Container>
        )
    }

    //Functions Area

    //Signup Button Click
    _onClickButtonSignup(){
        this.props.navigation.navigate("Signup")
    }

    //Login Button Click
    _onClickButtonLogin(){
      const {email,password,appLoginResponse} = this.state;

      if(email===''){
        Alert.alert("Please enter email")
      }else if(password===''){
        Alert.alert("Please enter password")
      }else{
          this.props.loginAPI(email,password).then(()=>{
            if(this.props.renderResponse.status===1){
                this.gotoDashboard()
            }else{
              Alert.alert("Demo App",this.props.renderResponse.message)
            }
          })
      }
    }

    gotoDashboard(){
      const resetAction = NavigationActions.navigate({
        routeName: 'Dashboard',
        actions: [NavigationActions.navigate({ routeName: 'Dashboard' })],
      });
      this.props.navigation.dispatch(resetAction);
    }
}

const styles = StyleSheet.create({
topView:{
  flex:2.5,
  borderWidth:0,
  justifyContent:'flex-end',
  paddingBottom:20,
  alignItems:'center',
},
middleView:{
  flex:3,
  borderWidth:0
},
bottomView:{
  flex:3.5,
  borderWidth:0
},
signTxt:{
  fontSize:18,
  fontWeight:'600',
  color:colors.button_Color,
  fontWeight:'900',
},
inputStyleLogin:{
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
inputStylePassword:{
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
signupBtnStyle:{
  height:25,
  width:25,
},
app_background:{
  height:null,
  width:null,
  flex:10
},
buttonLoginStyle:{
  height:40,
  borderRadius:5,
  marginLeft:20,
  marginRight:20,
  backgroundColor:colors.button_Color,
  borderWidth:0,
},
buttonSignup:{
  height:40,
  borderRadius:5,
  backgroundColor:colors.txtWhite,
  marginLeft:20,
  marginRight:20,
  borderWidth:0.7
},
buttonSignupTitle:{
  fontSize:14,
  color:colors.black,
}
})

// Pass all the state data to Props
const mapStateToProps = state => {
    let storedRepositories = [];
    console.log("Dataaaaa iss:",state);
    storedRepositories.status = state.status;
    storedRepositories.sessionData = state.sessionData;
    storedRepositories.role_menu = state.role_menu;
    storedRepositories.user_name = state.user_name;
    storedRepositories.message = state.message;
  return {
    renderResponse: storedRepositories
  };
};
// Pass All API Methords as Props
const mapDispatchToProps = {
  loginAPI
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
