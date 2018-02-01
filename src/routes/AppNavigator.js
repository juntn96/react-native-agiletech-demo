import { StackNavigator } from 'react-navigation'

import Login from '../containers/Login'
import Personal from '../containers/Personal'

const AppNavigator = StackNavigator(
    {
        Login: {
            screen: Login
        },
        Personal: {
            screen: Personal
        }
    },
    {
        initialRouteName: 'Login',
        navigationOptions: {
            headerStyle: {
                elevation: 0,
                backgroundColor: '#009900',
                
            },
            headerTintColor: '#FFF'
        },
        
    }
)

export default AppNavigator