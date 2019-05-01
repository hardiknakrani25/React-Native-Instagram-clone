import React, { Component } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import {createBottomTabNavigator, createAppContainer} from 'react-navigation'
import {Icon} from "native-base";

import HomeTab from './AppTabNavigator/HomeTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import SearchTab from './AppTabNavigator/SearchTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';



class MainScreen extends Component {
    static navigationOptions = {
        headerLeft: <Icon name="camera" style={{paddingLeft: 10}}/>,
        title: "Instagram",
        headerRight: <Icon name="send" style={{paddingRight: 10}}/>
    };

  render() {
    return (

        <AppTabNavigator/>

    );
  }
}

export default MainScreen;

const TabsNavigator = createBottomTabNavigator({
    HomeTab,
    SearchTab,
    AddMediaTab,
    LikesTab,
    ProfileTab
})

const AppTabNavigator = createAppContainer(TabsNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
