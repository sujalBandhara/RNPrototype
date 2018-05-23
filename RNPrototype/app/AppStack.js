'use strict'

import { StackNavigator }       from 'react-navigation';
import Signin                   from './screens/signin/Signin';
import Signup                   from './screens/signup/Signup';
import Dashboard                from './screens/dashboard/Dashboard';
import Homes                    from './screens/dashboard/Homes';
import Places                   from './screens/dashboard/Places';

//Options will be written here for the navigation
const options = {
    header: null
}
//App screens
const AppStack = StackNavigator(
    {
        Signin: {
            screen: Signin
        },
        Signup: {
            screen: Signup
        },
        Dashboard:{
            screen: Dashboard
        },
        Homes:{
          screen:Homes
        },
        Places:{
          screen:Places
        }
    },
    {
        navigationOptions: options
    }
)

module.exports = AppStack
