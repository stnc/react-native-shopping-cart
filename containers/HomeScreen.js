import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import ShoppingCartIcon from './../containers/ShoppingCartIcon'
class HomeScreen extends Component {
    static navigationOptions = {
        headerTitle: 'HOME',
        headerRight: (
            <ShoppingCartIcon/>
        ),
      };
    render() {
        return (
            <View style={styles.container}>
                <Button title="Electronics" onPress={() => this.props.navigation.navigate('Electronics')} />
                <Button title="Books" onPress={() => this.props.navigation.navigate('Books')} />
                <Button title="Cart" onPress={() => this.props.navigation.navigate('Cart')} />
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});