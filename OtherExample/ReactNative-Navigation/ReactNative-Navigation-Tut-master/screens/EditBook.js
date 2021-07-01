import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View, TouchableNativeFeedback,
    Button
} from 'react-native';


export default class EditBook extends Component {

    constructor(props) {
        super(props);
      }
  

      static navigationOptions = ({navigation}) => {
        const {state} = navigation;
        return{ 
        
       //title: this.props.navigation.state.params.title+' edit book',
       headerTitle:navigation.state.params.title,
        
        //headerTitle: 'sdsd',
        // header: null,
        headerLeft: (

            <Button
                title="< Back"
                onPress={() => navigation.navigate('Book')}
            />
        ),
    }
    }


    render() {
        
        const { navigation } = this.props;
        console.log( this.props);
        const itemId = navigation.getParam('id', 'NO-ID');

        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    EditBook #{JSON.stringify(itemId)}
                </Text>
               
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

