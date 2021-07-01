import React from 'react';
import { View, Linking, TouchableHighlight } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';
//import moment from 'moment';

export default class CommentsCompenent extends React.Component {



  onPress = () => {   
    this.props.navigation.replace('AllNews');
    this.props.navigation.navigate('Book');  

  };



  render() {
    //https://stackoverflow.com/questions/40051449/react-native-touchable-highlight-and-touchable-native-feedback-for-making-my-men
    return (
      <View key={this.props.article.id}
        style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}
      >
        <Text style={{ marginBottom: 50, borderBottomColor: "black" }}>
          {this.props.article.body}  {this.props.article.id} </Text>
        <Button
          title="Back To books" 
          onPress={() => this.onPress()} />
      </View>


    );
  }
}

const styles = {
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 10
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3
  }
};
