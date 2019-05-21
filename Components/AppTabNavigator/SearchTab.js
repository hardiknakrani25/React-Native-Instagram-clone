import React, { Component } from "react";
import { SafeAreaView, StyleSheet, View, Text, ScrollView } from "react-native";
import { SearchBar } from "react-native-elements";
import {
  Header,
  Icon,
  Container,
  Content,
  Thumbnail,
  Left,
  Right,
  Body
} from "native-base";

export default class SearchTab extends Component {
  state = {
    search: "",
    showLoading: false
  };

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-search" style={{ color: tintColor }} />
    )
  };

  updateSearch = search => {
    this.setState({ search });
    if (search.length <= 0) {
      this.setState({ showLoading: false });
    } else {
      this.setState({ showLoading: true });
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <SearchBar
            lightTheme
            round
            containerStyle={{
              backgroundColor: "#ffffff",
              borderTopWidth: 0,
              borderBottomWidth: 0
            }}
            inputContainerStyle={{ backgroundColor: "#E5E4EB" }}
            showLoading={this.state.showLoading}
            placeholder="Search"
            onChangeText={this.updateSearch}
            value={this.state.search}
          />
        </View>
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: "center",
              paddingStart: 5,
              paddingEnd: 5
            }}
          >
            <Thumbnail
              style={{
                marginHorizontal: 5,
                borderColor: "pink",
                borderWidth: 2
              }}
              source={require("../../assets/storiesHeaderThumbnails/1.jpg")}
            />
            <Thumbnail
              style={{
                marginHorizontal: 5,
                borderColor: "pink",
                borderWidth: 2
              }}
              source={require("../../assets/storiesHeaderThumbnails/2.jpeg")}
            />
            <Thumbnail
              style={{
                marginHorizontal: 5,
                borderColor: "pink",
                borderWidth: 2
              }}
              source={require("../../assets/storiesHeaderThumbnails/3.jpeg")}
            />
            <Thumbnail
              style={{
                marginHorizontal: 5,
                borderColor: "pink",
                borderWidth: 2
              }}
              source={require("../../assets/storiesHeaderThumbnails/4.jpeg")}
            />
            <Thumbnail
              style={{
                marginHorizontal: 5,
                borderColor: "pink",
                borderWidth: 2
              }}
              source={require("../../assets/storiesHeaderThumbnails/5.jpeg")}
            />
            <Thumbnail
              style={{
                marginHorizontal: 5,
                borderColor: "pink",
                borderWidth: 2
              }}
              source={require("../../assets/storiesHeaderThumbnails/6.jpeg")}
            />
            <Thumbnail
              style={{
                marginHorizontal: 5,
                borderColor: "pink",
                borderWidth: 2
              }}
              source={require("../../assets/storiesHeaderThumbnails/7.jpeg")}
            />
            <Thumbnail
              style={{
                marginHorizontal: 5,
                borderColor: "pink",
                borderWidth: 2
              }}
              source={require("../../assets/storiesHeaderThumbnails/8.jpeg")}
            />
          </ScrollView>
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
