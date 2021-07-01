import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { StackNavigator, createStackNavigator, createBottomTabNavigator, withNavigation, createAppContainer,TouchableHighlight } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Bookcase from './screens/Bookcase';
import AllNews from './screens/AllNews';
import AddBook from './screens/AddBook';
import Lists from './screens/Lists';
import Profile from './screens/Profile';
import EditBook from './screens/EditBook'
import DetailNews from './screens/DetailNews'
import CommentsNews from './screens/CommentsNews'


const ACTIVE_TAB_COLOR = '#69A6F7'
const INACTIVE_TAB_COLOR = '#aaa'

const headerStyles = {
    headerTintColor: '#fff',
    headerStyle: {
        borderBottomWidth: 0,
        backgroundColor: ACTIVE_TAB_COLOR,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 20,
        shadowOffset: { width: 0, height: 0 }
    }
}

let screen = Dimensions.get('window');

export const Tabs = createBottomTabNavigator({
    'Bookcase': {
        screen: Bookcase,
       headerMode: 'none',
        header: null,
        navigationOptions: {
    
            tabBarLabel: 'Bookcase',
            tabBarIcon: ({ tintColor }) => <Icon name="open-book" type="entypo" size={28} color={tintColor} />
        },
        defaultNavigationOptions: {
            title: 'Bookcase ekranı'
        }
    },
    'AllNews': {
        screen: AllNews,
        navigationOptions: {
            tabBarLabel: 'News',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-map" type="ionicon" size={28} color={tintColor} />
        },
        defaultNavigationOptions: {
            title: 'news ekranı'
        }
    },
    'Add Book': {
        screen: AddBook,
        navigationOptions: {
            tabBarLabel: 'Add Book',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-add-circle-outline" type="ionicon" size={28}
                color={tintColor} />
        },
        defaultNavigationOptions: {
            title: 'add book ekranı'
        }
    },
    'Lists': {
        screen: Lists,
        navigationOptions: {
            tabBarLabel: 'Lists',
            tabBarIcon: ({ tintColor }) => <Icon name="list" type="entypo" size={28} color={tintColor} />
        },
        defaultNavigationOptions: {
            title: 'list ekranı alanım'
        }
    },
    'My Profile': {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            title: 'profilesds ',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-person" type="ionicon" size={28} color={tintColor} />
        },
        tabBarOptions: {
            activeTintColor: '#d2959f',
            inactiveTintColor: 'gray',
        },
     
    },


});

export const BookcaseStack = createStackNavigator({
    Bookcase: {
        screen: Bookcase,
        navigationOptions: ({ navigation }) => ({
            title: 'Bookcase back',
            tabBarVisible: false,
            gesturesEnabled: false,
            title:'Detail Penginapan',
        headerTitleStyle:{
            fontSize:14,
            textAlign: "center",
            flex: 1,
        },
        tabBarVisible: false,
        headerStyle:{
            backgroundColor:'#4A94FB',
            borderBottomColor: 'transparent',
        },
        headerTintColor: 'white',
        headerBackTitle: null,
        }),

        
    },
    EditBook: {
        screen: EditBook,
        navigationOptions: ({ navigation }) => ({
            headerBackTitle: null,
            tabBarVisible: false,
            gesturesEnabled: false
        }),
    },
});

export const NewscaseStack = createStackNavigator({
    Newscase: {
        screen: AllNews,
     
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: false,
            gesturesEnabled: false,
            title: 'tüm habeerler'
        }),
    },
    DetailNews: {
        screen: DetailNews,
        navigationOptions: ({ navigation }) => ({

            tabBarVisible: false,
            gesturesEnabled: false
        }),
    },
    CommentsNews: {
        screen: CommentsNews,
        navigationOptions: ({ navigation }) => ({

            tabBarVisible: false,
            gesturesEnabled: false
        }),
    },
});


const RootStack = createStackNavigator(    {
        Tabs: {
            screen: Tabs,
            navigationOptions: ({ navigation }) => ({
                gesturesEnabled: false,
                tabBarVisible: false,
            })
        },
        BookcaseStack: {
            screen: BookcaseStack,
            navigationOptions: ({ navigation }) => ({
                gesturesEnabled: false,
                tabBarVisible: false,
            })
        },
        NewscaseStack: {
            screen: NewscaseStack,
            navigationOptions: ({ navigation }) => ({
                gesturesEnabled: false,
                tabBarVisible: false,
            })
        }

    },
    {
       headerMode: 'none',
        mode: 'modal',
        defaultNavigationOptions: {
         title: 'home ekran',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        },
      
    }
);


class App extends React.Component {
    render() {
        return <RootStack />;
    }
}

export default createAppContainer(RootStack);