import React, {Component} from 'react';

import { View, Text} from 'react-native';

export default class Profile_Activity extends Component {

  static navigationOptions =
    {
      title: 'Profile Activity',
    };

    render() {

      return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <Text>Profile Activity Screen</Text>

        </View>
      
      );
    }
  }