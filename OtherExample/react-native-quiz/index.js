

import React, { Component } from 'react';

import { AppRegistry,YellowBox } from 'react-native';

import { name as appName } from './app.json';



import AppNavigator from './app/navigation/AppNavigator';

class App extends React.Component {
    render() {
        return (
          
              <AppNavigator />
         
          );
    }
}
AppRegistry.registerComponent(appName, () => App);





YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
]);



