import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default class App extends React.Component {


  constructor() {
    super()
    // this.buttonPressed = this.buttonPressed.bind(this);
  }

  buttonPressed = () => {
    console.log(this.state.username, this.state.password)
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>Username</Text>
        <TextInput defaultValue={this.state.username} onChangeText={text => this.setState({ username: text })} />

        <Text>password</Text>
        <TextInput defaultValue={this.state.password} onChangeText={text => this.setState({ password: text })} />

        <Button title={"hello"} onPress={this.buttonPressed} />
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