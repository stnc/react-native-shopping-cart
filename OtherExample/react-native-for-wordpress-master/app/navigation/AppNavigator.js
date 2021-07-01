import {  createAppContainer,createStackNavigator } from 'react-navigation';
import React, { Component } from "react";
import Tabs from './TabsNavigator';
import SplashScreen from '..//screens/Splash';
import DetailBlogTab from './DetailBlogTabNavigator';

const AppStackNavigator = createStackNavigator({
  Splash: SplashScreen,

  Tabs: {
      screen: Tabs,
      navigationOptions: ({ navigation }) => ({
          gesturesEnabled: false,
          tabBarVisible: false,
      })
  },
  DetailBlogTab: {
      screen: DetailBlogTab,
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
          title: 'home ekran',
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