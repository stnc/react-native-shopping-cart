import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import React, { Component } from "react";
import Tabs from './TabsNavigator';
import SplashScreen from '../screens/Splash';

const AppStackNavigator = createStackNavigator({
  Splash: SplashScreen,

  Tabs: {
      screen: Tabs,
      navigationOptions: ({ navigation }) => ({
          gesturesEnabled: false,
          tabBarVisible: false,
      })
  },

},
  {
      headerMode: 'none',
      mode: 'modal',
      defaultNavigationOptions: {
          title: 'home ',
          headerStyle: {
              backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              fontWeight: 'bold',
          },
      },

  }
);
const AppNavigator = createAppContainer(AppStackNavigator);

class AppStackNavig extends Component {
    render() {
        return (
            <AppStackNavigator />
        );
    }
}

export default  AppNavigator;
// export default  createAppContainer(RootStack);