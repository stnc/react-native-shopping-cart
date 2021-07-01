import React from 'react';
import { StyleSheet, Text, View, Button, YellowBox, TouchableOpacity } from 'react-native';
import { black } from 'ansi-colors';

YellowBox.ignoreWarnings(['Remote debugger']);

export default class App extends React.Component {


  constructor() {
    super()
    this.state = {
      bottomView: "red"
    }
    // this.buttonPressed = this.buttonPressed.bind(this);
  }

  buttonPressed = () => {
    // console.log(this.state.username, this.state.password)
    this.setState({ bottomView: "yellow" })
  }


  render() {
    return (
      <View style={styles.container}>
        <Text  style={{ backgroundColor: this.state.bottomView, flex: 2,padding:10,color:"yellow" }}>Username</Text>

        <TouchableOpacity style={{ backgroundColor: "black", flex: 1 }} ></TouchableOpacity>


        <Button title="hello" onPress={this.buttonPressed} />

    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    height:250,
    padding:50

  },
  redbox: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },


});