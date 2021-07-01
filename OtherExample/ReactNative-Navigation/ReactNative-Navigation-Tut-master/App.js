import React, { Component } from 'react';
import { Dimensions, Button, Platform } from 'react-native';
import { StackNavigator, createStackNavigator, createBottomTabNavigator, withNavigation, createAppContainer, TouchableHighlight } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Bookcase from './screens/Bookcase';
import AllNews from './screens/AllNews';
import AddBook from './screens/AddBook';
import Lists from './screens/Lists';
import Profile from './screens/Profile';
import EditBook from './screens/EditBook'
import DetailNews from './screens/DetailNews'
import CommentsNews from './screens/CommentsNews'
//https://github.com/react-navigation/react-navigation/issues/147
//https://github.com/react-navigation/react-navigation/issues/145#issuecomment-337826964

//https://medium.com/@shovonroy/how-to-properly-navigate-with-react-navigation-e38fe3bf7381
const HomeBookTab = createStackNavigator(
    {
        Book: {
            screen: Bookcase,
            navigationOptions: ({ navigation }) => ({
                title: 'Bookcase back',
                tabBarVisible: false,
                gesturesEnabled: false,
                title: 'Detail ',
                headerTitleStyle: {
                    fontSize: 14,
                    textAlign: "center",
                    flex: 1,
                },

                headerStyle: {
                    backgroundColor: '#4A94FB',
                    borderBottomColor: 'transparent',
                },
                headerTintColor: 'white',
                headerBackTitle: "sds",
            }),


        },
        EditBook: EditBook,

    },
    {
        defaultNavigationOptions: {
            headerTitle: 'Homse',
            headerStyle: {
                backgroundColor: '#0091EA',
            },
            headerTintColor: '#fff',
        },
    },

);

const NewsTab = createStackNavigator(
    {
        AllNews: AllNews,
        CommentsNews: CommentsNews,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#0091EA',
            },
            headerTintColor: '#fff',
            title: 'Home Tab',
        },
    }
);
const DetailNewsTab = createStackNavigator(
    {

        DetailNews: DetailNews,

    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#0091EA',
            },
            headerTintColor: '#fff',
            title: 'detail news',
        },
    }
);

const AddBookTab = createStackNavigator(
    {
        AddBook: AddBook,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#0091EA',
            },
            headerTintColor: '#fff',
            title: 'Home Tab',

        },
    }
);

const ListTab = createStackNavigator(
    {
        ListTab: Lists,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#0091EA',
            },
            headerTintColor: '#fff',
            title: 'Home Tab',

        },
    }
);

const ProfileTab = createStackNavigator(
    {
        ProfileTab: Profile,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#0091EA',
            },
            headerTintColor: '#fff',
            title: 'Home Tab',

        },
    }
);

const Tabs = createBottomTabNavigator({
    'Home': {
        screen: HomeBookTab,
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

    'News': {
        screen: NewsTab,
        headerMode: 'none',
        header: null,
        navigationOptions: {

            tabBarLabel: 'News',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-map" type="ionicon" size={28} color={tintColor} />
        },
        defaultNavigationOptions: {
            title: 'Bookcase ekranı'
        }
    },

    'AddBookTab': {
        screen: AddBookTab,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            tabBarLabel: 'Add Book',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-add-circle-outline" type="ionicon" size={28}
                color={tintColor} />
        },
        defaultNavigationOptions: {
            title: 'Bookcase ekranı'
        }
    },
    'ListTab': {
        screen: ListTab,
        headerMode: 'none',
        header: null,
        navigationOptions: {

            tabBarLabel: 'Lists',
            tabBarIcon: ({ tintColor }) => <Icon name="list" type="entypo" size={28} color={tintColor} />
        },
        defaultNavigationOptions: {
            title: 'Bookcase ekranı'
        }
    },
    'ProfileTab': {
        screen: ProfileTab,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            tabBarLabel: 'Profile',
            title: 'profilesds ',
            //https://github.com/react-navigation/react-navigation/issues/4214
            //   tabBarVisible: false,
            tabBarIcon: ({ tintColor }) => <Icon name="ios-person" type="ionicon" size={28} color={tintColor} />
        },
        defaultNavigationOptions: {
            title: 'Bookcase ekranı'
        }
    },
}
);


const RootStack = createStackNavigator({
    Tabs: {
        screen: Tabs,
        navigationOptions: ({ navigation }) => ({
            gesturesEnabled: false,
            tabBarVisible: false,
        })
    },
    DetailNewsTab: {
        screen: DetailNewsTab,
        navigationOptions: ({ navigation }) => ({
            gesturesEnabled: false,
            tabBarVisible: false,
        })
    },


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