
import React, { Component } from "react";
import { BackHandler } from "react-native";
import { connect } from "react-redux";
import { addNavigationHelpers, NavigationActions } from "react-navigation";
import AppStackNavigator from "./AppNavigator";

//burası devam edecek 
//https://github.com/stnc-reactnative/redux-react-navigation-demos/tree/authFlow

class AppNavigation extends Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, navigationState } = this.props;
    if (navigationState.stateForLoggedIn.index <= 1) {
      BackHandler.exitApp();
      return;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { navigationState, dispatch, isLoggedIn } = this.props;
    const state = isLoggedIn
      ? navigationState.stateForLoggedIn
      : navigationState.stateForLoggedOut;
    return (
      <AppStackNavigator navigation={addNavigationHelpers({ dispatch, state })} />
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.LoginReducer.isLoggedIn,
    navigationState: state.NavigationReducer
  };
};

export default connect(mapStateToProps)(AppNavigation);