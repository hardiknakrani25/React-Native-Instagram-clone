import React, { Component } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

class MainScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>MainScreen</Text>
      </SafeAreaView>
    );
  }
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
