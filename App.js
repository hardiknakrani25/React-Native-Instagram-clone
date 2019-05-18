import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import MainScreen from "./Components/MainScreen";
import Login from "./Components/Login/login";
import SignUp from "./Components/Login/Signup";
import Splash from "./Components/Splash";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AuthStack = createStackNavigator(
  {
    Login,
    SignUp
  },
  {
    headerMode: "none"
  }
);
const AppStack = createStackNavigator({
  Main: MainScreen
});

const root = createSwitchNavigator({
  Splash,
  AuthStack,
  AppStack
});
const AppContainer = createAppContainer(root);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
