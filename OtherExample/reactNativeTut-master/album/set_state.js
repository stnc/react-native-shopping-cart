import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyText from './component/myText'
import MyButton from './component/MyButton'


export default class App extends React.Component {
  state = {
    myState1: 'Lorem ipsum dolor sit amet',
    sa: 'Lorem ipsum dolor sit amet3',
    btn: 'İshak cansu',
  }
  updateState = () => {
    this.setState({ sa: 'The state is updated' })
  }

  updateStatebtn = () => {
    this.setState({ btn: '1The state is updated' })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.redbox} />
        <View style={styles.bluebox} />
        <View style={styles.blackbox} />
        <MyText sa={this.state.sa} updateState={this.updateState} />
        <MyButton btn={this.state.btn} updateState={this.updateStatebtn} />

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