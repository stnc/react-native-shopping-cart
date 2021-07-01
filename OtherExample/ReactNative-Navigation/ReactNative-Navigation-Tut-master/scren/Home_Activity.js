import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import React, { Component } from 'react';
export default class Home_Activity extends Component {
 
  static navigationOptions =
    {
      title: 'Profile Activity',
    };
 
  render() {
    return (
      <View style={styles.MainContainer}>
 
        <Text style={{ marginTop: 40, fontSize: 20 }}>App Home Screen</Text>
 
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
 
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Settings')}>
 
            <Text style={styles.text}>Go to settngs Tab</Text>
 
          </TouchableOpacity>
 
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Details')}>
 
            <Text style={styles.text}>Goto Details Screen</Text>
 
          </TouchableOpacity>
 
        </View>
 
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
 
  MainContainer: {
 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    padding: 11
 
  },
 
  button: {
    alignItems: 'center',
    backgroundColor: '#43A047',
    padding: 12,
    width: 280,
    marginTop: 12,
  },
 
  text: {
 
    color: '#fff'
  }
 
});
