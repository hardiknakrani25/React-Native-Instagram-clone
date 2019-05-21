import React, { Component } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { Icon } from "native-base";
import { SearchBar } from "react-native-elements";

export default class SearchTab extends Component {
  state = {
    search: ""
  };

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-search" style={{ color: tintColor }} />
    )
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ marginRight: 15, marginLeft: 15 }}>
          <SearchBar
            lightTheme
            round
            containerStyle={{
              backgroundColor: "#ffffff",
              borderTopWidth: 0,
              borderBottomWidth: 0
            }}
            inputContainerStyle={{ backgroundColor: "#E5E4EB" }}
            showLoading
            placeholder="Search"
            onChangeText={this.updateSearch}
            value={this.state.search}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
