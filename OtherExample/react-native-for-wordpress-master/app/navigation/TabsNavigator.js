import React from 'react';

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Text } from 'react-native';

import Icon from 'react-native-ionicons';

import AllBlog from '../screens/posts/AllBlog';

import CommentsNews from '../screens/posts/CommentsNews';

import Register from '../screens/login/Register';

import Login from '../screens/login/Login'

import Profile from '../screens/Profile';

import About from '../screens/About';



const LoginTab = createStackNavigator(
  {
    LoginTab: Login,
    Register: Register, //new add 
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
/*
const RegisterTab = createStackNavigator({
  Register: Register,
},
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: 'registetrr',

    },
  }
);
*/
const ProfileTab = createStackNavigator({
  ProfileTab: Profile,
},
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: 'Profile',

    },
  }
);

const BlogTab = createStackNavigator({
  AllBlog: AllBlog,
  // CommentsNews: CommentsNews,
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
const AboutTab = createStackNavigator({
  About: About,
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
    screen: BlogTab,
    headerMode: 'none',
    header: null,
    navigationOptions: {
      tabBarLabel: 'Anasayfa',
      tabBarIcon: ({ focused }) => {
        if (focused) {
          return (
            <Icon ios="ios-home" android="md-home" color="#0091EA" />
          );
        }
        return (
          <Icon ios="ios-home" android="md-home" color={'gray'} />
        )
      },
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    },
  },
  'Login': {
    screen: LoginTab,
    headerMode: 'none',
    header: null,
    navigationOptions: {
      tabBarLabel: 'Üye girişi',
      // tabBarLabel: ({ Der }) => {
      //     return (
      //       <Text style={textStyle.text}>Üye girişi</Text>
      //     );
      // },
      tabBarIcon: ({ focused }) => {
        if (focused) {
          return (
            <Icon ios="ios-person" android="md-person" color="#0091EA" />
          );
        }
        return (
          <Icon ios="ios-person" android="md-person" color={'gray'} />
        )
      },
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    },
  },

/*
  'RegisterTab': {
    screen: RegisterTab,
    headerMode: 'none',
    header: null,
    navigationOptions: {
      tabBarLabel: 'Üye Ol',
      tabBarIcon: ({ focused }) => {
        if (focused) {
          return (
            <Icon ios="ios-person-add" android="md-person-add" color="#0091EA" />
          );
        }
        return (
          <Icon ios="ios-person-add" android="md-person-add" color={'gray'} />
        )
      },
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    },
    defaultNavigationOptions: {
      title: 'Home-',
    }
  },
*/
  'ProfileTab': {
    screen: ProfileTab,
    headerMode: 'none',
    header: null,
    navigationOptions: {
      tabBarLabel: 'Profilim',
      title: 'Profilim',
      tabBarIcon: ({ focused }) => {
        if (focused) {
          return (
            <Icon ios="ios-contact" android="md-contact" color="#0091EA" />
          );
        }
        return (
          <Icon ios="ios-contact" android="md-contact" color={'gray'} />
        )
      },
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    },


  },

  'AboutTab': {
    screen: AboutTab,
    headerMode: 'none',
    header: null,
    navigationOptions: {

      tabBarLabel: 'Hakkında',
      title: 'Profile',
      tabBarIcon: ({ focused }) => {
        if (focused) {
          return (
            <Icon ios="information-circle"  color="#0091EA" />
          );
        }
        return (
          <Icon ios="information-circle" color={'gray'} />
        )
      },
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    },


  },
}
);

export default Tabs;
// 

// const mapStateToProps = (state) => {
// 	return {
// 		isLoginPending: state.isLoginPending,
// 		isLoginSuccess: state.isLoginSuccess,
// 		loginError: state.loginError
// 	};
// }



// export default connect(mapStateToProps,null)(Tabs);
const textStyle = {
  text: {
    fontSize: 10.5
  },
}