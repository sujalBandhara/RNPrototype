import React,{Component} from 'react';
import { View, StyleSheet, Text, TouchableOpacity,StatusBar,ScrollView,Image,ImageBackground,Dimensions } from 'react-native'

import Icon                   from 'react-native-vector-icons/SimpleLineIcons'
import {NavigationActions}    from 'react-navigation';
import colors                 from './../../resources/styles/colors'
import Container              from './../../components/Container'
import NavBar                 from './../../components/NavBar'
import Input                  from './../../components/form/Input'
import Button                 from './../../components/form/Button'
import BlankSpace             from './../../components/BlankSpace'
import TopContent             from './TopContent'
import HeaderBar              from './HeaderBar'
import exploreData            from './../../data/exploreData'
import HomeList               from './HomeList'
import Swiper                 from './../../components/Swiper'
import store                  from './../../redux/store/configureStore'

const screenSize = Dimensions.get('window');

class Dashboard extends Component {

    constructor(props) {
      super(props);
    }

    //Navigation Options:: It is use for stop user for gesture navigation
    static navigationOptions = ({navigation, screenProps}) => {
        const params = navigation.state.params || {};
      return {
              gesturesEnabled:false,
            }
    }

    render() {
      console.log("Scale",screenSize.scale);
        return (
            <Container showStatusBar={true}>
                    <NavBar hideBackButton={true} style={styles.navbarStyle} navigator={ this.props.navigation } title="Home" headerRight={this.renderHeaderRight()}/>
                    <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
                          <View style={styles.topView}>
                              <TopContent welcomeText="Welcome" titleName={store.getState().user_name}/>
                          </View>
                          <View style={styles.swiper1}>
                              {this.renderHomeList()}
                              {this.renderFeaturedDestinations()}
                              {this.renderPlaces()}
                          </View>
                    </ScrollView>
            </Container>
        )
    }

    //Functions Area
    renderHeaderRight() {
        return <TouchableOpacity onPress={()=> this.onClickButtonLogout()} style={{ paddingRight: 25 }}>
                    <Image source={{uri:'logout'}} resizeMode="contain" style={styles.headerButtonLogout}/>
                </TouchableOpacity>
    }

    onClickButtonLogout(){
        const resetAction = NavigationActions.navigate({
          routeName: 'Signin',
          actions: [NavigationActions.navigate({ routeName: 'Signin' })],
        });
        this.props.navigation.dispatch(resetAction);
    }

    renderHomeList() {
        let itemThumbs = (
            exploreData.homes.map((item, idx) => {
               return <HomeList style={styles.homeListStyle} styleImages="single" key={ item.id } data={item}/>
            })
        )
        return (
            <HeaderBar
                title='Homes'
                onPressSeeAll={ this.onPressSeeAll.bind(this, 'Homes')}>
                    <Swiper>
                        { itemThumbs }
                    </Swiper>
            </HeaderBar>
        )
    }

    renderFeaturedDestinations() {
        let itemThumbs = (
            exploreData.destinations.map((item, idx) => {
               return <HomeList style={styles.homeListStyle} styleImages="multiple" key={ item.id } data={item}/>
            })
        )
        return (
            <HeaderBar
                hideSeeAll={true}
                title='Featured destinations'>
                    <Swiper>
                        { itemThumbs }
                    </Swiper>
            </HeaderBar>
        )
    }

    renderPlaces() {
        let thumbWidth = screenSize.width / 3
        let itemThumbs = (
            exploreData.places.map((item, idx) => {
               return <HomeList style={styles.homeListStyle} width={thumbWidth} key={ item.id } data={item}/>
            })
        )
        return (
            <HeaderBar
                title='Places in Detroit'
                onPressSeeAll={ this.onPressSeeAll.bind(this, 'Places')}>
                    <Swiper>
                        { itemThumbs }
                    </Swiper>
            </HeaderBar>
        )
    }

    //Go to another screen
    onPressSeeAll(index) {
        this.props.navigation.navigate(index)
    }


}

const styles = StyleSheet.create({
topView:{
  height:160,
  borderWidth:0,
  backgroundColor:colors.theme_color
},
homeListStyle:{
  paddingLeft:15,
},
swiper1:{

},
bottomView:{
  flex:3.5,
  borderWidth:0
},
app_background:{
  height:null,
  width:null,
  flex:10
},
headerButtonLogout:{
  height:25,
  width:25
},
welcomeText:{
  fontSize:40,
  fontWeight:'800'
},
nameText:{
  fontSize:35,
  fontWeight:'800'
}
});

module.exports = Dashboard
