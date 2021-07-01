import React from 'react';
import { registerRootComponent } from 'expo';


import { StyleSheet, Text, View } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}
export default App

Expo.registerRootComponent(App);

