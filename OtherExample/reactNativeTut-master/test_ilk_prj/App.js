import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyButton from './component/myButton'
import List from './component/List'
import Input from './component/Input'

export default class App extends React.Component {
  state = {
    myState: 'Lorem ipsum dolor sit amet'
  }
  updateState = () => {
    this.setState({ myState: 'The state is updated' })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.redbox} />
        <View style={styles.bluebox} />
        <View style={styles.blackbox} />
        <MyButton myState={this.state.myState} updateState={this.updateState} />

        <List />

      <View style={styles.container}>
        <Input />
      </View>

      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
 
  },
  redbox: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },
  bluebox: {
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  },
  blackbox: {
    width: 100,
    height: 100,
    backgroundColor: 'black'
  },

});