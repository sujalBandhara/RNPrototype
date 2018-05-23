'use strict'
import React,{Component}          from 'react';
import { AppRegistry,Platform }   from 'react-native';
import AppStack                   from './AppStack'
import KeyboardManager            from 'react-native-keyboard-manager';
import { Provider, connect }      from 'react-redux';
import store                      from './redux/store/configureStore';

class App extends Component {

    //Life cycle method
    componentDidMount()
    {
      if(Platform.OS === 'ios')
      {
          KeyboardManager.setToolbarPreviousNextButtonEnable(true);
      }
    }

    render() {
        return(
          <Provider store={store}>
              <AppStack />
          </Provider>
        );
    }
}

AppRegistry.registerComponent('RNPrototype', () => App);
