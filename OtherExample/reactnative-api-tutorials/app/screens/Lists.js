import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Lists extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Lists
        </Text>
        <Button title="Back To books"
                    onPress={() => this.props.navigation.navigate('Bookcase')}
                />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});