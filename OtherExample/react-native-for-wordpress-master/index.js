

import React, { Component } from 'react';

import { AppRegistry,YellowBox } from 'react-native';

import { name as appName } from './app.json';

import { Provider } from 'react-redux';

import store from './app/redux/store';

import AppNavigator from './app/navigation/AppNavigator';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
              <AppNavigator />
            </Provider>
          );
    }
}
AppRegistry.registerComponent(appName, () => App);



// const Root = () => (
//   <Provider store={store}>
//     <AppNavigator />
//   </Provider>
// )
// AppRegistry.registerComponent(appName, () => Root);



YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
]);



