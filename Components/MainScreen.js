import React, { Component } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import {createBottomTabNavigator, createAppContainer} from 'react-navigation'
import {Icon} from "native-base";
class MainScreen extends Component {
    static navigationOptions = {
        headerLeft: <Icon name="camera" style={{paddingLeft: 10}}/>,
        title: "Instagram",
        headerRight: <Icon name="send" style={{paddingRight: 10}}/>
    };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>MainScreen</Text>
      </SafeAreaView>
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
