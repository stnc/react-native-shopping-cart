

import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';

import React, { Component } from 'react';

import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import { Icon } from 'react-native-elements';



import Bookcase from './app/screens/Bookcase';

import AllNews from './app/screens/AllNews';

import Register from './app/screens/Register';

import Login from './app/screens/Login';

import Profile from './app/screens/Profile';

import EditBook from './app/screens/EditBook';

import DetailNews from './app/screens/DetailNews';

import CommentsNews from './app/screens/CommentsNews';

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

const RegisterTab = createStackNavigator(
    {
        Register: Register,
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

const LoginTab = createStackNavigator(
    {
        LoginTab: Login,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#0091EA',
            },
            headerTintColor: '#fff'
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
            //  tabBarIcon: ({ tintColor }) => <Icon name="open-book" type="entypo" size={28} color={tintColor} />
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
    'Login': {
        screen: LoginTab,
        headerMode: 'none',
        header: null,
        navigationOptions: {

            tabBarLabel: 'Login',
            tabBarIcon: ({ tintColor }) => <Icon name="list" type="entypo" size={28} color={tintColor} />

        },
        defaultNavigationOptions: {
            title: 'Bookcase ekranı'
        }
    },
    'RegisterTab': {
        screen: RegisterTab,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            tabBarLabel: 'Register',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-add-circle-outline" type="ionicon" size={28}  color={tintColor} />
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
const RAps = createAppContainer(RootStack);


// export default createAppContainer(RootStack);



/*
import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { name as appName } from './app.json';
export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
}
*/

AppRegistry.registerComponent(appName, () => RAps);











