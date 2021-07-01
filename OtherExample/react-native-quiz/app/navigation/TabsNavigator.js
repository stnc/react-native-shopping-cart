import React from 'react';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import { createStackNavigator } from 'react-navigation-stack'


import Icon from 'react-native-ionicons';



import Quiz from '../screens/Quiz';
import About from '../screens/About';





const AboutTab = createStackNavigator({
  About: About,
},
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: 'Home Tab',
    },
  }
);
const QuizTab = createStackNavigator({
  Quiz: Quiz,
},
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: 'Home',
    },
  }
);

const Tabs = createBottomTabNavigator({

  'Home': {
    screen: QuizTab,
    headerMode: 'none',
    header: null,
    navigationOptions: {
      tabBarLabel: 'HOME',
      tabBarIcon: ({ focused }) => {
        if (focused) {
          return (
            <Icon ios="ios-home" android="md-home" color="#0091EA" style={{color:'#0091EA'}}  />
          );
        }
        return (
          <Icon ios="ios-home" android="md-home" color={'gray'} style={{color:'gray'}} />
        )
      },
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    },
  },

  'AboutTab': {
    screen: AboutTab,
    headerMode: 'none',
    header: null,
    navigationOptions: {

      tabBarLabel: 'ABOUT',
      title: 'Profile',
      tabBarIcon: ({ focused }) => {
        if (focused) {
          return (
            <Icon ios="ios-information-circle" android="md-information-circle"   color="#0091EA" style={{color:'#0091EA'}}  />
          );
        }
        return (
          <Icon ios="ios-information-circle" android="md-information-circle"  color={'gray'} style={{color:'gray'}} />
        )
      },
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    },
  },
  'QuizTab': {
    screen: QuizTab,
    headerMode: 'none',
    header: null,
    navigationOptions: {

      tabBarLabel: 'Quiz',
      title: 'Profile',
      tabBarIcon: ({ focused }) => {
        if (focused) {
          return (
            <Icon ios="ios-information-circle" android="md-information-circle"   color="#0091EA" style={{color:'#0091EA'}}  />
          );
        }
        return (
          <Icon ios="ios-information-circle" android="md-information-circle"  color={'gray'} style={{color:'gray'}} />
        )
      },
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    },
  },

}
);

export default Tabs;

const textStyle = {
  text: {
    fontSize: 10.5
  },
}