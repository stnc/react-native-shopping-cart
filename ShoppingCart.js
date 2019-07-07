import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { createStackNavigator,createAppContainer } from 'react-navigation'
import HomeScreen from './containers/HomeScreen'
import ElectronicsScreen from './containers/ElectronicsScreen'
import BooksScreen from './containers/BooksScreen'
import ShoppingCartIcon from './containers/ShoppingCartIcon'
import CartScreen from './containers/CartScreen'
class ShoppingCart extends Component {
    render() {
        return (
            <AppStackNavigator />
        );
    }
}

const AppStackNavigator = createStackNavigator({
    Home: HomeScreen,
    Electronics: ElectronicsScreen,
    Books: BooksScreen,
    Cart: CartScreen
}, 
{
        navigationOptions: {
            headerTitle: 'Shopping App',
            headerRight: (
                <ShoppingCartIcon />
            )
        }
 })



 const ShoppingCart1 = createAppContainer(AppStackNavigator);

export default ShoppingCart1;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});